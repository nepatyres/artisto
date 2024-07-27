import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../models/product';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
