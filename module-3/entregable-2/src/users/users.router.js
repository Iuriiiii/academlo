const router = require('express').Router();
const { getFromUsersById, getUsers, postUsers } = require('./users.services');

router.get('/users', getUsers);

router.post('/users', postUsers);

router.get('/users/:id', getFromUsersById);

module.exports = router;