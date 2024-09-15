import type { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm } from 'formidable';
import type { Fields, Files, File } from 'formidable';
import { put } from '@vercel/blob';
import Product from '../../../models/product';

export const config = {
    api: {
        bodyParser: false,
    },
};

interface ProductFormFields {
    name?: string;
    description?: string;
    price?: string;
    stock?: string;
}

const postProducts = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    return new Promise<void>((resolve, reject) => {
        const form = new IncomingForm();

        form.parse(req, async (err, fields: Fields, files: Files) => {
            if (err) {
                console.error('Form parsing error:', err);
                res.status(500).json({ error: 'Error parsing form data' });
                return resolve();
            }

            const productFields: ProductFormFields = {
                name: fields.name?.[0],
                description: fields.description?.[0],
                price: fields.price?.[0],
                stock: fields.stock?.[0],
            };

            if (!productFields.name || !productFields.description || !productFields.price || !productFields.stock) {
                res.status(400).json({ error: 'Missing required fields' });
                return resolve();
            }

            try {
                const imagePaths: string[] = [];
                const imageFiles = files.images as File[] | File | undefined;

                if (imageFiles) {
                    const fileArray = Array.isArray(imageFiles) ? imageFiles : [imageFiles];
                    for (const file of fileArray) {
                        if (file.filepath && file.originalFilename) {
                            const blob = await put(file.originalFilename, file as any, { access: 'public' });
                            imagePaths.push(blob.url);
                        }
                    }
                }

                const product = await Product.create({
                    name: productFields.name,
                    description: productFields.description,
                    price: parseFloat(productFields.price),
                    stock: parseInt(productFields.stock, 10),
                    images: imagePaths,
                } as any);

                res.status(201).json(product);
            } catch (error) {
                console.error('Database or upload error:', error);
                res.status(500).json({ error: (error as Error).message });
            } finally {
                resolve();
            }
        });
    });
};

export default postProducts;