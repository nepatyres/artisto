import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Product from '../../../models/product';

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            const uploadPath = path.join(process.cwd(), 'public', 'uploads');
            fs.mkdirSync(uploadPath, { recursive: true });
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, `${uniqueSuffix}-${file.originalname}`);
        }
    })
}).array('images', 10);

export const config = {
    api: {
        bodyParser: false,
    },
};

const deleteFiles = (filePaths: string[]) => {
    filePaths.forEach(filePath => {
        const fullPath = path.join(process.cwd(), 'public', filePath);
        if (fs.existsSync(fullPath)) {
            fs.unlinkSync(fullPath);
        }
    });
};

export default async (req: NextApiRequest | any, res: NextApiResponse) => {
    const { id } = req.query;

    if (req.method  === 'PUT') {
        upload(req as any, res as any, async (err) => {
            if (err) {
                console.error('Multer error:', err);
                return res.status(500).json({ error: err.message });
            }
            const { name, description, price, stock, deletedImages } = req.body;
            let imagePaths = req.files.map((file: any) => `/uploads/${file.filename}`);
            const deletedImagesArray = JSON.parse(deletedImages || "[]");
            try {
                const product = await Product.findByPk(id as string) as any;
                if (!product) {
                    return res.status(404).json({ error: 'Product not found' });
                }
                if (imagePaths.length > 0) {
                    imagePaths = [...product.images.filter((img: string) => !deletedImagesArray.includes(img)), ...imagePaths];
                } else {
                    imagePaths = product.images.filter((img: string) => !deletedImagesArray.includes(img));
                }
                deleteFiles(deletedImagesArray.map((img: string) => img.replace('/uploads/', 'public/uploads/')));
                await product.update({ name, description, price: parseFloat(price), stock: parseInt(stock, 10), images: imagePaths });
                res.status(200).json(product);
            } catch (error) {
                console.error('Database error:', error);
            }
        });
    } else if (req.method === 'PATCH') {
        try {
            const product = await Product.findByPk(id as string) as any;
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            const newDisplayValue = !product.display;
            await product.update({ display: newDisplayValue });
            res.status(200).json({ success: true, display: newDisplayValue });
        } catch (error) {
            console.error('Database error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else if (req.method === 'DELETE') {
        try {
            const product = await Product.findByPk(id as string) as any;
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            deleteFiles(product.images.map((img: string) => img.replace('/uploads/', 'public/uploads/')));
            await product.destroy();
        } catch (error) {
            console.error('Database error:', error);
        }
    } else if (req.method === 'GET') {
        try {
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            console.error('Database error:', error);
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'PATCH', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

