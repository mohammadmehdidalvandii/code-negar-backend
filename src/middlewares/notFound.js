const notFound  = ( req , res , next)=>{
   return res.status(404).json({
        message:"Route is not found ❌",
        statusCode:404
    })
}

module.exports = notFound