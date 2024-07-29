import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Product from '../../models/product';

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

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    if (req.method === 'PUT') {
        upload(req, res, async (err) => {
            if (err) {
                console.error('Multer error:', err);
                return res.status(500).json({ error: err.message });
            }

            const { name, description, price, stock } = req.body;
            let imagePaths = req.files.map(file => `/uploads/${file.filename}`);

            try {
                const product = await Product.findByPk(id as string);
                if (!product) {
                    return res.status(404).json({ error: 'Product not found' });
                }

                // If no new images are uploaded, keep the existing images
                if (imagePaths.length === 0) {
                    imagePaths = product.images;
                }

                await product.update({
                    name,
                    description,
                    price: parseFloat(price),
                    stock: parseInt(stock, 10),
                    images: imagePaths
                });

                res.status(200).json(product);
            } catch (error) {
                console.error('Database error:', error);
                res.status(500).json({ error: (error as Error).message });
            }
        });
    } else if (req.method === 'DELETE') {
        try {
            const product = await Product.findByPk(id as string);
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }

            await product.destroy();
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            console.error('Database error:', error);
            res.status(500).json({ error: (error as Error).message });
        }
    } else {
        res.setHeader('Allow', ['PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
