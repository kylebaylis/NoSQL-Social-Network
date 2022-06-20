const {User} = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res){
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // get single user by id
    getUserById({params}, res) {

    },

    // update single user by id
    updateUser({params, body}, res) {

    },

    // delete single user by id
    deleteUser({params}, res) {

    }
};

module.exports = userController;