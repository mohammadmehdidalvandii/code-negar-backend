const {sign , verify} = require('jsonwebtoken');
const {hash , compare} = require('bcryptjs');

const securityCode = process.env.SRC_CODE;

if(!securityCode){
    throw new Error('Security code is not found')
}

// generateToken 
const generateToken = (data) => {
    try{
        const token = sign(data , securityCode , {expiresIn:'1h'});
        return token
    } catch (error){
        console.log(`Invalid token ${error}`)
    }
}
// verify token
const verifyToken = (token) => {
    try{
        const payload  = verify(token , securityCode)
        return payload
    } catch (error){
        throw new Error(`Invalid verify token => ${error}`)
    }
}
// hashedPassword
const hashedPassword = async (password) => {
    const hashPassword = await hash(password , 10);
    return hashPassword
}
// compare password
const verifyPassword = async (password , hashedPassword) => {
    const isValid = await compare (password , hashedPassword)
    return isValid
}

module.exports = {
    generateToken,
    verifyToken,
    hashedPassword,
    verifyPassword
}