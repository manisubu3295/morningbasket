const router = (await import('express')).Router();
let gifts = [];

router.get('/', (req,res)=> res.json(gifts));

router.post('/', (req,res)=>{
  const { boxName='Custom Gift Box', items=[], receiver={} } = req.body || {};
  const gift = { id:'g_'+Date.now(), boxName, items, receiver, status:'CREATED', createdAt:new Date().toISOString() };
  gifts.unshift(gift);
  res.json(gift);
});

export default router;
