import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export const createProduct = async (request: Request, response: Response) => {
  try {
    const { category,
      description,
      name,
      price,
      ingredients } = request.body;

    const imagePath = request.file?.filename;

    const product = await Product.create({
      categoryId: category,
      description,
      imagePath,
      name,
      price: Number(price),
      ingredients: JSON.parse(ingredients)
    });

    return response.status(201).json(product);
  }
  catch(error) {
    console.log(error);
    response.sendStatus(500);
  }
};
