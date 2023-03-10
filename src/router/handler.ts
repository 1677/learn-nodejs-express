import { Request, Response } from "express"

export const profileHandler = (req: Request, res: Response) => {
    console.log(req.query);
    res.send({
        status: 0,
        message: '用户信息'
    });
}

export const loginHandler = (req: Request, res: Response) => {
    console.log(req.query);
    res.send({
        status: 0,
        message: '登录成功'
    });
}

export const registerHandler = (req: Request, res: Response) => {
    console.log(req.query);
    res.send({
        status: 0,
        message: '注册成功'
    });
}