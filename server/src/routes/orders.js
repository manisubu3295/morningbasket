import { v4 as uuid } from 'uuid';
const router = (await import('express')).Router();
let orders = [];

router.get('/', (req,res)=> res.json(orders));

router.post('/', (req,res)=>{
  const { items=[], address={}, payment='COD', note='' } = req.body || {};
  const order = {
    id: uuid(),
    items, address, payment, note,
    status: 'PLACED',
    createdAt: new Date().toISOString()
  };
  orders.unshift(order);
  res.json(order);
});

router.post('/:id/status', (req,res)=>{
  const { status } = req.body || {};
  const o = orders.find(x=>x.id===req.params.id);
  if(!o) return res.status(404).json({error:'Not found'});
  o.status = status || o.status;
  res.json(o);
});

export default router;
