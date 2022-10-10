const express = require('express');
const app = express();
const db = require('./utils/database');

db.authenticate()
    .then(() => console.log('Authenticated from database!'))
    .catch(console.error);

db.sync()
    .then(() => console.log('Syncronized succefuly!'))
    .catch(console.error);

app.use(express.json());
app.use('/products', require('./products/products.router'));
app.get('/', (req, res) => res.status(200).json({ message: 'server working' }));

app.listen(4000, () => console.log('Listening at http://localhost:4000/'));