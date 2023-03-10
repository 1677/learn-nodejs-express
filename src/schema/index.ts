import { Joi, schema } from "express-validation";

// 用户名的校验规则
const usernameJoi = Joi.string().pattern(/^[0-9a-zA-Z]{6,20}$/).required();
// 密码的校验规则
const passwordJoi = Joi.string().min(6).max(20).required();

// 登录校验
export const loginValidate: schema = {
    body: Joi.object({
        username: usernameJoi,
        password: passwordJoi
    }).unknown(true)
};

// 注册校验
export const registerValidate: schema = {
    body: Joi.object({
        username: usernameJoi,
        password: passwordJoi,
        age: Joi.number().min(1).max(120).required(),
        nickname: Joi.string().min(1).max(10),
        email: Joi.string().email().required()
    }).unknown(true)
};