const router = (await import('express')).Router();
let stats = {
  today: { orders: 12, revenue: 5499, subscriptions: 3 },
  week: { orders: 88, revenue: 40599, subscriptions: 12 },
  month: { orders: 320, revenue: 149999, subscriptions: 44 }
};

router.get('/summary', (req,res)=> res.json(stats));

export default router;
