const express = require('express');
const app = express();
const usersRouter = require('./users/users.router')

app.use(express.json());
app.use(usersRouter);

app.listen(4000, function () {
    console.log('Listening at 4000');
});