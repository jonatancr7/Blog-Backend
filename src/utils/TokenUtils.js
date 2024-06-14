import jwt from "jsonwebtoken";
import { signature } from "./env.js";

export const validarToken = token=>jwt.verify(token,signature,);
export const generarToken = token=> jwt.sign(user,signature,{expiresIn:"7d"});