import { NextApiRequest, NextApiResponse } from 'next';
import Bestseller from '../../../models/bestseller';

const deleteBestseller = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    if (req.method === 'DELETE') {
        try {
            const bestseller = await Bestseller.findByPk(id as string);
            if (!bestseller) {
                return res.status(404).json({ error: 'bestseller not found' });
            }
            await bestseller.destroy();
        } catch (error) {
            console.error('Database error:', error);
        }
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default deleteBestseller;