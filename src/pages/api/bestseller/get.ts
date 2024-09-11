import { NextApiRequest, NextApiResponse } from 'next';
import Bestseller from '../../../models/bestseller';

const getBestseller = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const bestseller = await Bestseller.findAll();
      res.status(200).json(bestseller);
    } catch (error) {
      console.error('Database error:', error);
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default getBestseller;