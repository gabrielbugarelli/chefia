import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export const listOrders = async (request: Request, response: Response) => {
  try {
    const orders = await Order.find()
      .sort({createdAt: 1})
      .populate('products.product');
    return response.json(orders);
  }

  catch {
    return response.sendStatus(500);
  }
};
