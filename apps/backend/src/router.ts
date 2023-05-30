import { Router } from 'express';
import { listCategories } from './useCases/categories/listCategory';

export const router = Router();

router.get('/categories', listCategories);
