import Database from "better-sqlite3";
const db = new Database('app.db')

const query = "select * from departamentos where id=?;"
//ejecutamos sentencia con el parámetro 1 el parametro 1
const departamentos = db.prepare(query).get([1])

db.close()

console.log(departamentos)