import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import auth from './routes/auth.js';
import products from './routes/products.js';
import categories from './routes/categories.js';
import cart from './routes/cart.js';
import orders from './routes/orders.js';
import subscriptions from './routes/subscriptions.js';
import gifting from './routes/gifting.js';
import users from './routes/users.js';
import reports from './routes/reports.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.json({ ok:true, name:'MorningBasket API', version:'0.1.0' }));

app.use('/auth', auth);
app.use('/products', products);
app.use('/categories', categories);
app.use('/cart', cart);
app.use('/orders', orders);
app.use('/subscriptions', subscriptions);
app.use('/gifting', gifting);
app.use('/users', users);
app.use('/reports', reports);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
