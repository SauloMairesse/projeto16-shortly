import { Router } from "express";
import { postRegister, postLogin } from "../controllers/accountRouter";

const accountRouter = Router();

categoryRouter.get("/login", postLogin);
categoryRouter.post("/register", postRegister);

export default accountRouter;