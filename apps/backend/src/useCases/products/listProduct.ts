import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export const listProducts = async (request: Request, response: Response) => {
  try {
    const products = await Product.find();
    return response.json(products);
  }

  catch {
    return response.sendStatus(500);
  }
};
