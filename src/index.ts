import e, { Express } from "express";
import router from "./router";
import { errorMiddleware } from "./utils/errorHandler";
import sendErrorMiddleware from "./utils/sendError";

const app: Express = e();

app.use(sendErrorMiddleware);
// 请求体解析中间件，只有设置后body中才会有数据
app.use(e.json());
app.use(e.urlencoded());
// 使用router中间件
app.use(router);
// error处理中间件要放到router后才能正常处理异常
app.use(errorMiddleware);

app.listen(8088, () => {
    console.log('server start');
});