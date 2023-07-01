import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export const createCategory = async (request: Request, response: Response) => {
  try {
    const { icon, name } = request.body;

    const category = await Category.create({icon, name});
    return response.status(201).json(category);
  }
  catch(error) {
    console.log(error);
    response.sendStatus(500);
  }
};
