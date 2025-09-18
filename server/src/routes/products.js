import { products } from '../data/products.js';
const router = (await import('express')).Router();

router.get('/', (req, res) => {
  const { q, category } = req.query;
  let list = products;
  if (category) list = list.filter(p => p.category === category);
  if (q) list = list.filter(p => p.name.toLowerCase().includes(String(q).toLowerCase()));
  res.json(list);
});

router.get('/:id', (req,res) => {
  const p = products.find(x => x.id === req.params.id);
  if(!p) return res.status(404).json({error:'Not found'});
  res.json(p);
});

export default router;
