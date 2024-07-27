import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../models/product';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    if (req.method === 'DELETE') {
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
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};