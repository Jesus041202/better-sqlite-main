import Database from "better-sqlite3";
const db = new Database('app.db')

const query = "select * from departamentos;"
const departamentos = db.prepare(query).all()

db.close()

console.log(departamentos)