import { Router } from "express";
import { getURL } from "../controllers/getURL.js";

const getURLRouter = Router();

postUrlRouter.get("/getURL", getURL);

export default getURLRouter;