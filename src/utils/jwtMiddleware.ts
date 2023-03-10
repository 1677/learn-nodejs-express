import { expressjwt } from "express-jwt";
import { jwtSignSecret } from "../constants";

export const jwtMiddleware = expressjwt({secret: jwtSignSecret, algorithms: ['HS256']});