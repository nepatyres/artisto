import { NextApiRequest, NextApiResponse } from 'next';
import MoreProducts from '../../../models/moreProducts';

const deleteProduct = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    if (req.method === 'DELETE') {
        try {
            const moreProducts = await MoreProducts.findByPk(id as string);
            if (!moreProducts) {
                return res.status(404).json({ error: 'moreProducts not found' });
            }
            await moreProducts.destroy();
        } catch (error) {
            console.error('Database error:', error);
        }
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default deleteProduct;