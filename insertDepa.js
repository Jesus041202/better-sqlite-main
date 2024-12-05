import Database from "better-sqlite3";
const db = new Database('app.db')

const data=[
    {Nombre:"ana"},
    {Nombre:"juan"},
    {Nombre:"bety"},
    {Nombre:"paco"},
    {Nombre:"luis"}
]
const insertData=db.prepare(`insert into departamentos(Nombre) values(?)`)

data.forEach(departamentos=>{
    const r=insertData.run(departamentos.Nombre)
    console.log(r)
})
db.close()