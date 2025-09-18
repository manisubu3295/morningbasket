const router = (await import('express')).Router();
let cart = []; // demo memory cart

router.get('/', (req,res)=> res.json(cart));
router.post('/add', (req,res)=>{
  const { productId, qty=1 } = req.body || {};
  const idx = cart.findIndex(i=>i.productId===productId);
  if(idx>=0){ cart[idx].qty += qty; } else { cart.push({ productId, qty }); }
  res.json({ ok:true, cart });
});
router.post('/remove', (req,res)=>{
  const { productId } = req.body || {};
  cart = cart.filter(i=>i.productId!==productId);
  res.json({ ok:true, cart });
});
router.post('/clear', (req,res)=>{
  cart = [];
  res.json({ ok:true, cart });
});

export default router;
