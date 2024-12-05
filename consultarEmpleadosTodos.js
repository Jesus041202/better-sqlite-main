import Database from "better-sqlite3";
const db = new Database('app.db')

const query = "select * from empleados;"
const empleados = db.prepare(query).all()

db.close()

console.log(empleados)