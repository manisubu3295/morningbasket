import { v4 as uuid } from 'uuid';
const router = (await import('express')).Router();

// Demo-only auth
router.post('/login', (req, res) => {
  const { phone, otp, provider } = req.body || {};
  res.json({ token: uuid(), user: { id: 'u_demo', name: 'Demo User', phone, provider } });
});

router.post('/signup', (req, res) => {
  const { name, phone } = req.body || {};
  res.json({ ok:true, user: { id: 'u_' + Date.now(), name, phone } });
});

export default router;
