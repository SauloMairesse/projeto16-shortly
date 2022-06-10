import { Router } from "express";
import { getUserURLS } from "../controllers/getListUrlUserController.js";

const getUserURLSRouter = Router();

getUserURLSRouter.get("/getListUrlsUser", getUserURLS);

export default getUserURLSRouter;