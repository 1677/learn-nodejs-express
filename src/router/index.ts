import { Router } from "express";
import { loginPath, profilePath, registerPath } from "./constants";
import { loginHandler, profileHandler, registerHandler } from "./handler";

const router = Router();

// 获取用户数据
router.get(profilePath, profileHandler);
//注册
router.post(registerPath, registerHandler);
// 登录
router.post(loginPath, loginHandler);

export default router;