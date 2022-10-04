const { addNewUser, deleteUserById, getAllUsers, getUserById } = require('./users.controllers');

function getUsers(req, res) {
    res.status(200).json(getAllUsers());
}

function postUsers(req, res) {
    const { first_name, last_name, email, password, birthday } = req.body;

    res.status(200).json(addNewUser(first_name, last_name, email, password, birthday));
}

function getFromUsersById(req, res) {
    console.log(req.params.id);
    res.status(200).json(getUserById(req.params.id));
}

module.exports = {
    getUsers,
    postUsers,
    getFromUsersById
}