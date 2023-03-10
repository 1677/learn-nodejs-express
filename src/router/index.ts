import { Router } from "express";
import { validate } from "express-validation";
import { loginValidate, registerValidate } from "../schema";
import { loginPath, profilePath, registerPath } from "./constants";
import { loginHandler, profileHandler, registerHandler } from "./handler";

const router = Router();

// 获取用户数据
router.get(profilePath, profileHandler);
//注册
router.post(registerPath, validate(registerValidate), registerHandler);
// 登录
router.post(loginPath, validate(loginValidate), loginHandler);

export default router;