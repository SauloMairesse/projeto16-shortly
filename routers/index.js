import { Router } from "express";
import accountRouter from "./accountRouter.js"

const router = Router();

router.use(accountRouter); // create/read

export default router;