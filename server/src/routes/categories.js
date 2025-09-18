import { categories } from '../data/categories.js';
const router = (await import('express')).Router();

router.get('/', (req, res) => res.json(categories));

export default router;
