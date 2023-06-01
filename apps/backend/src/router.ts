import { Router } from 'express';
import { listCategories } from './useCases/categories/listCategory';
import { createCategory } from './useCases/categories/createCategory';

export const router = Router();

router.get('/categories', listCategories);
router.post('/categories', createCategory);
