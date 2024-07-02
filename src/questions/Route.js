import { Router } from "express";
import * as questionsController from "./Controller.js";
export const questionsRouter = Router();

questionsRouter.post("/createanswer",questionsController.createanswer);

questionsRouter.get("/getquestions",questionsController.getquestions);