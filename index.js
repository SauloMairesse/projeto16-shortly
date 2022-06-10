import express, {json} from "express"
import cors from "cors"
import db from "./config/db.js"
import dotenv from "dotenv"
import router from "./routers/index.js"

const app = express() //começando o servidor
app.use(cors()) //evitar erro de portas (cors origin front//back)
app.use(json())
app.get("/teste", async (req,res)=>{
  const url = await db.query('INSERT INTO users')
  console.log(url.rows)
  res.redirect(url.rows[0].url)
})
//ROUTERS
// app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`mode: ${process.env.MODE || "not defined -> DEV"}`);
  console.log(`server is up and running on port ${port}`);
});