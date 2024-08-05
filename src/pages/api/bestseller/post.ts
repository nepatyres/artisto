import { NextApiRequest, NextApiResponse } from "next";
import Bestseller from "../../../models/bestseller";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { id, name, price, image } = req.body;
    console.log("Received Data:", { id, name, price, image });

    try {
      const bestseller = await Bestseller.create({
        id: parseInt(id.toString(), 10),
        name: name.toString(),
        price: parseFloat(price.toString()),
        image: image.toString(),
      });
      res.status(201).json(bestseller);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

