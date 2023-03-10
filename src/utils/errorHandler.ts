import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {

    res.sendError('服务异常', 500);
}