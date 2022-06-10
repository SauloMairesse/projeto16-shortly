import { Router } from "express";
import { postRegister, postLogin } from "../controllers/accountController.js";

const accountRouter = Router();

accountRouter.post("/login", postLogin);
accountRouter.post("/register", postRegister);

export default accountRouter;