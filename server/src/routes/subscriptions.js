const router = (await import('express')).Router();
let plans = [
  { id:'sub_daily', name:'Daily Fruit Pack', cadence:'DAILY', price:149 },
  { id:'sub_weekly', name:'Weekly Fruit Pack', cadence:'WEEKLY', price:899 },
  { id:'sub_monthly', name:'Monthly Fruit Pack', cadence:'MONTHLY', price:3299 },
];
let active = [];

router.get('/plans', (req,res)=> res.json(plans));
router.get('/active', (req,res)=> res.json(active));

router.post('/subscribe', (req,res)=>{
  const { planId, address } = req.body || {};
  const plan = plans.find(p=>p.id===planId);
  if(!plan) return res.status(400).json({error:'Invalid plan'});
  const sub = { id: 's_' + Date.now(), planId, address, status:'ACTIVE', createdAt: new Date().toISOString() };
  active.unshift(sub);
  res.json(sub);
});

export default router;
