import { NextApiRequest, NextApiResponse} from 'next';
import { Storage } from '@google-cloud/storage';
import multer from 'multer';
import { Readable } from 'stream';
import Product from '../../../models/product';

const storage = new Storage({
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
    credentials: process.env.GOOGLE_APPLICATION_CREDENTIALS
        ? JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)
        : undefined,
});

const bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME || '');

const multerGoogleStorage = multer.memoryStorage();
const upload = multer({ storage: multerGoogleStorage }).array('images', 10);

export const config = {
    api: {
        bodyParser: false,
    },
};

const uploadToGCS = async (file) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileName = `${uniqueSuffix}-${file.originalname}`;
    const fileUpload = bucket.file(fileName);

    const stream = fileUpload.createWriteStream({
        metadata: {
            contentType: file.mimetype,
        },
    });

    return new Promise((resolve, reject) => {
        stream.on('error', (error) => {
            console.error('GCS upload error:', error);
            reject(error);
        });

        stream.on('finish', () => {
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
            resolve(publicUrl);
        });

        const readable = new Readable();
        readable._read = () => { }; // _read is required but you can noop it
        readable.push(file.buffer);
        readable.push(null);

        readable.pipe(stream);
    });
};

const postProducts = async (req, res) => {
    if (req.method === 'POST') {
        upload(req, res, async (err) => {
            if (err) {
                console.error('Multer error:', err);
                return res.status(500).json({ error: err.message });
            }

            const { name, description, price, stock } = req.body;
            const files = req.files;

            try {
                const uploadPromises = files.map((file) => uploadToGCS(file));
                const imagePaths = await Promise.all(uploadPromises);

                const product = await Product.create({
                    name,
                    description,
                    price: parseFloat(price),
                    stock: parseInt(stock, 10),
                    images: imagePaths
                });

                res.status(201).json(product);
            } catch (error) {
                console.error('Upload or database error:', error);
                res.status(500).json({ error: (error).message });
            }
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default postProducts;