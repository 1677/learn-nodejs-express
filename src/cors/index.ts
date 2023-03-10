import cors, { CorsOptions } from "cors";

const option: CorsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // post请求的预检请求会返回204，一些旧版浏览器（IE11,各种 SmartTV）在204上阻塞，所以这里强制返回200
    allowedHeaders: 'content-type' // 这里要有个明确的值才能正确设置允许跨域的值，不然浏览器传什么值这里就会返回什么值，造成CORS不安全
}

const corsMiddleware = cors(option);

export default corsMiddleware;