import { NextApiRequest, NextApiResponse } from 'next';
import MoreProducts from '../../../models/moreProducts';

const getProduct = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const moreProducts = await MoreProducts.findAll();
            res.status(200).json(moreProducts);
        } catch (error) {
            console.error('Database error:', error);
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default getProduct;