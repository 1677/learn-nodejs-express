import { Response } from "express"
import { Request } from "express-jwt";
import jwt from "jsonwebtoken";
import { jwtSignSecret, usernameKey } from "../constants";

export const profileHandler = (req: Request, res: Response) => {
    console.log(req.query);
    res.send({
        status: 0,
        message: '用户信息',
        data: req.auth
    });
}

export const loginHandler = (req: Request, res: Response) => {
    console.log(req.body);
    const data = req.body;
    
    const loginToken = jwt.sign({username: data[usernameKey]}, jwtSignSecret, {algorithm: 'HS256', expiresIn: '24h'});

    res.send({
        status: 0,
        message: '登录成功',
        data: data['username'],
        token: loginToken
    });
}

export const registerHandler = (req: Request, res: Response) => {

    console.log(req.body);
    const data = req.body;
    if (!data['username'] || !data['password']){
        res.sendError('提交内容不合法');
        return;
    }

    res.send({
        status: 0,
        message: '注册成功',
        data: data['username']
    });
}