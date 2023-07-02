import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export const cancelOrder = async (request: Request, response: Response) => {
  try {
    const { orderId } = request.params;

    await Order.findByIdAndDelete(orderId);
    return response.sendStatus(204);
  }
  catch(error) {
    console.log(error);
    response.sendStatus(500).json(error);
  }
};