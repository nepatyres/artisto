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

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        upload(req, res, async (err) => {
            if (err) {
                console.error('Multer error:', err);
                return res.status(500).json({ error: err.message });
            }

            const { name, description, price, stock } = req.body;
            const imagePaths = req.files.map(file => `/uploads/${file.filename}`);

            try {
                const product = await Product.create({
                    name,
                    description,
                    price: parseFloat(price),
                    stock: parseInt(stock, 10),
                    images: imagePaths
                });
                res.status(201).json(product);
            } catch (error) {
                console.error('Database error:', error);
                res.status(500).json({ error: error.message });
            }
        });
    }
}