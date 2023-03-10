import { NextFunction, Request, Response } from "express";

// 给Request扩充新的方法
declare global {
    namespace Express {
        interface Response {
            sendError: (message: string, status?: number) => void;
        }
    }
}

const sendErrorMiddleware = (req: Request, res: Response, next: NextFunction) => {

    // 对扩充的方法进入实现
    res.sendError = (message: string, status = 1) => {
        res.send({
            status,
            message,
        });
    }
    next();
}

export default sendErrorMiddleware;