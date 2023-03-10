import { NextFunction, Request, Response } from "express";
import { ValidationError } from "express-validation";

export const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof ValidationError) {
        res.sendError('参数不合法');
        return;
    } else if (error.name === 'UnauthorizedError') {
        res.sendError('token error', 401);
        return;
    }

    res.sendError('服务异常', 500);
}