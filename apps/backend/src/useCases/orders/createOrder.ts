import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export const createOrder = async (request: Request, response: Response) => {
  try {
    const { icon, name, products, table } = request.body;

    const order = await Order.create({icon, name, products, table});
    return response.status(201).json(order);
  }
  catch(error) {
    console.log(error);
    response.sendStatus(500).json(error);
  }
};