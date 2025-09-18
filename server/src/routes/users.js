const router = (await import('express')).Router();
let users = [{ id:'u_demo', name:'Demo User', phone:'+910000000000' }];

router.get('/', (req,res)=> res.json(users));

router.post('/', (req,res)=>{
  const { name, phone } = req.body || {};
  const u = { id:'u_'+Date.now(), name, phone };
  users.unshift(u);
  res.json(u);
});

export default router;
