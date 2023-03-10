import e, { Express, Request, Response } from "express";
import router from "./router";

const app: Express = e();

// 使用router中间件
app.use(router);

app.listen(8088, () => {
    console.log('server start');
});