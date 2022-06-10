import { Router } from "express";
import accountRouter from "./accountRouter.js";
import getURLRouter from "./getURLRouter.js";
import getUserURLSRouter from "./getUserURLSRouter.js";

const router = Router();

router.use(accountRouter); // create/read
router.use(getUserURLSRouter);
router.use(getURLRouter);

export default router;