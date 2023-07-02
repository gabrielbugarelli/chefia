import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export const listCategories = async (request: Request, response: Response) => {
  try {
    const categories = await Category.find();
    return response.json(categories);
  }

  catch {
    return response.sendStatus(500);
  }
};
