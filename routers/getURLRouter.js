import { Router } from "express";
import { getURL } from "../controllers/getURL.js";

const getURLRouter = Router();

getURLRouter.get("/getURL", getURL);

export default getURLRouter;