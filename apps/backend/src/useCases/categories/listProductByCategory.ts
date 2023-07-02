import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export const listProductsByCategory = async (request: Request, response: Response) => {
  try {
    const { categoryId } = request.params;

    const products = await Product.find().where('categoryId').equals(categoryId);
    return response.json(products);
  }

  catch {
    return response.sendStatus(500);
  }
};
