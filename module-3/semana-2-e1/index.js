const express = require('express');
const app = express();

app.use(express.json());

app.get('/me', (req, res) => {
    res.json({ name: 'Alexander', age: 25, country: 'Argentina' });
});

app.post('/metas', (req, res) => {
    res.json(['Programming', 'Games', 'Sleep']);
});

app.patch('/metas', (req, res) => {
    res.json(['I wanna escape from Argentina', 'I wanna continue studiyng english']);
});

app.put('/business', (req, res) => {
    res.json(['Google', 'Academlo', 'Twitter']);
});

app.listen(4000, () => console.log('Is listening at 4000'));