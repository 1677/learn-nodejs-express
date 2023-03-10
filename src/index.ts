import e, { Express, Request, Response } from "express";

const app: Express = e();

app.get('/', (req: Request, res: Response) => {
    console.log(req.query);
    res.send({
        status: 0,
        message: '请求成功'
    });
});

app.listen(8088, () => {
    console.log('server start');
});