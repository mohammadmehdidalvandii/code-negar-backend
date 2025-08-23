const UserModel = require('../models/User.model');

async function register(data) {
    const newUser = await UserModel.create({...data});
    return newUser    
};

async function login(email , password) {
    const user = await UserModel.findOne(
        {email:email , password:password}
    )
    return user
};

async function getUserByID(id) {
    const user = await UserModel.findOne({_id:id});
    return user
};

async function getUserByEmail(email) {
    const user = await UserModel.findOne({email:email});
    return user
};

async function getAllUsers() {
    const users = await UserModel.find({});
    return users
}

module.exports = {
    register,
    login,
    getUserByID,
    getUserByEmail,
    getAllUsers,
}