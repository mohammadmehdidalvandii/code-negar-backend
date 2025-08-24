const UsersServices = require('../services/users.services');
const {hashedPassword , verifyPassword , generateToken} = require('../utils/helpAuth');


async function createUser(req , res) {
    try{
        const {username , email , password , role} = req.body;

        // exist users
        const existUser = await UsersServices.getUserByEmail(email);
        if(existUser) return res.status(400).json({message:"Email already exists"});

        // hash password
        const hashPassword = await hashedPassword(password);
        // get all users 
        const users = await UsersServices.getAllUsers();
        const userRole =  users.length > 0 ?'USER':'ADMIN'
        const newUser = await UsersServices.register({
            username,
            email,
            password:hashPassword,
            role: userRole
        })

        return res.status(201).json({
            message:"Resister user successfully ✅",
            statusCode:201,
            data:{newUser}
        })

    } catch (error){
        return res.status(500).json({
            message:"Server Internal error Register users",
            error:error.message,
            statusCode:500
        })
    }
}

async function loginUser(req , res) {
    try{
        const {email , password} = req.body;
        // exist user
        const existUser = await UsersServices.getUserByEmail(email);
        if(!existUser) return res.status(400).json({
            message:"User is not found",
            statusCode:400
        });

        // isMatch Password
        const isMatchPassword =  await verifyPassword(password , existUser.password);
        if(!isMatchPassword) return res.status(400).json({
            message:"The password is not valid",
            statusCode:400
        })

        const userLogin =   await UsersServices.login(email , existUser.password);
        if(userLogin){

            const token = generateToken({
                id:existUser._id,
                username:existUser.username,
                email:existUser.email,
                role:existUser.role
            })
            res.setHeader("Authorization",`Bearer ${token}`)
            res.status(200).json({
                message:"Login user successfully ✅",
                data:{token}
        })      
        }


    } catch(error){
        return res.status(500).json({
            message:"Server Internal error Login users",
            error:error.message,
            statusCode:500
        })
    }
}



module.exports = {
    createUser,
    loginUser,
}