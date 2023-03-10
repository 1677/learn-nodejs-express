import { Response } from "express"
import { Request } from "express-jwt";
import jwt from "jsonwebtoken";
import { ageKey, emailKey, jwtSignSecret, nicknameKey, passwordKey, usernameKey } from "../constants";
import { insertUser, queryPassword, queryPureUser } from "../sql";

export const profileHandler = async (req: Request, res: Response) => {
    console.log(req.query);
    const data = req.auth ?? {};
    // 检查用户是否存在
    const oldUser = await queryPureUser(data[usernameKey]);
    if (!oldUser || oldUser.username !== data[usernameKey]) {
        res.sendError('用户不存在');
        return;
    }

    res.send({
        status: 0,
        message: '用户信息',
        data: oldUser
    });
}

export const loginHandler = async (req: Request, res: Response) => {
    console.log(req.body);
    const data = req.body;

    // 验证用户名与密码
    const passowrdString = await queryPassword(data[usernameKey]);
    if (!passowrdString || passowrdString !== data[passwordKey]) {
        res.sendError('登录失败');
        return;
    }
    // 生成登录令牌
    const loginToken = jwt.sign({username: data[usernameKey]}, jwtSignSecret, {algorithm: 'HS256', expiresIn: '24h'});
    
    res.send({
        status: 0,
        message: '登录成功',
        data: data['username'],
        token: loginToken
    });
}

export const registerHandler = async (req: Request, res: Response) => {

    console.log(req.body);
    const data = req.body;

    const oldUser = await queryPureUser(data[usernameKey]);
    if (oldUser) {
        res.sendError('用户已存在');
        return;
    }
    const user: User = {
        username: data[usernameKey],
        password: data[passwordKey],
        age: data[ageKey],
        nickname: data[nicknameKey],
        email: data[emailKey]
    };
    // 插入数据表
    const success = await insertUser(user);
    if (!success) {
        res.sendError('服务异常');
        return;
    }
    res.send({
        status: 0,
        message: '注册成功',
        data: data['username']
    });
}