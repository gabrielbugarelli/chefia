import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './useCases/categories/listCategory';
import { createCategory } from './useCases/categories/createCategory';

import { listProducts } from './useCases/products/listProduct';
import { createProduct } from './useCases/products/createProduct';
import { listProductsByCategory } from './useCases/categories/listProductByCategory';
import { listOrders } from './useCases/orders/listOrders';
import { createOrder } from './useCases/orders/createOrder';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { cancelOrder } from './useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

//Categories
router.get('/categories', listCategories);
router.get('/categories/:categoryId/products', listProductsByCategory);
router.post('/categories', createCategory);

//Products
router.get('/products', listProducts);
router.post('/products', upload.single('image'), createProduct);

//Orders
router.get('/orders', listOrders);
router.post('/orders', createOrder);
router.patch('/orders/:orderId', changeOrderStatus);
router.delete('/orders/:orderId', cancelOrder);
