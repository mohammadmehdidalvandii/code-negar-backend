const {body , validationResult} = require('express-validator');

const validationRegister = [
    body("username")
    .notEmpty().withMessage("نام کاربر الزامی است.")
    .isLength({min:3}).withMessage("نام کاربری باید حداقل 3 کاراکتر باشد "),
    body("email")
    .notEmpty().withMessage("مقدار ایمیل اجباری است")
    .isEmail().withMessage("لطفا ایمیل معتبر وارد کنید"),
    body("password")
    .notEmpty().withMessage("مقدار رمزعبور اجباری است ")
    .isLength({min: 6}).withMessage("رمز عبور باید حداقل 6 کاراکتر باشد"),
    (req , res , next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()})
        }
        next()
    }
]


module.exports = validationRegister
