import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export const createCategory = async (request: Request, response: Response) => {
  const { icon, name } = request.body;

  const category = await Category.create({icon, name});
  return response.send(category);
};
