import db from "../config/db.js"

export async function postLogin(req, res) {
  try {
    const result = await db.query(`
      SELECT * FROM categories
      ${offsetClause}
      ${limitClause}  
      ${orderClause}
    `);
    res.send(result.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // internal server error
  }
}

export async function postRegister(req, res) {
    try {
      const result = await db.query(`
        SELECT * FROM categories
        ${offsetClause}
        ${limitClause}  
        ${orderClause}
      `);
      res.send(result.rows);
    } catch (error) {
      console.log(error);
      res.sendStatus(500); // internal server error
    }
  }