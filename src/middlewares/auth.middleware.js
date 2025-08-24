const  {verifyToken} = require('../utils/helpAuth');

function authMiddleware  (req , res , next){
    try{
        const token = req.header('Authorization').split(' ')[1]
        if(!token) return res.status(401).json({message:"Access denied : Unauthorized token provided"});
        const decoded = verifyToken(token);
        req.user = decoded;
        next()
    } catch (error){
        res.status(401).json({
            message:"Invalid Token",
            error:error.message,
            statusCode:401
        })
    }
}


module.exports = authMiddleware