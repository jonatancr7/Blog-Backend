import express from "express";

import cors from "cors";
import { questionsRouter } from "./src/questions/Route.js";

export const app = express(); 

app.use(express.json());

app.use(cors());
app.use("/Questions",questionsRouter)
//your api rest endpoints
