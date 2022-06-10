import express, {json} from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routers/"

const app = express() //começando o servidor
app.use(cors()) //evitar erro de portas (cors origin front//back)
app.use(json()) //  

//ROUTERS
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`mode: ${process.env.MODE || "not defined -> DEV"}`);
  console.log(`server is up and running on port ${port}`);
});