import Database from "better-sqlite3";
const db = new Database('app.db')

const data=[
    {Nombre:"ana",Correo:"an1@gmail.com"},
    {Nombre:"juan",Correo:"ju2@gmail.com"},
    {Nombre:"bety",Correo:"be3@gmail.com"},
    {Nombre:"paco",Correo:"pa0@gmail.com"},
    {Nombre:"luis",Correo:"lu5@gmail.com"}
]
const insertData=db.prepare(`insert into empleados(Nombre,Correo) values(?,?)`)

data.forEach(empleados=>{
    const r=insertData.run(empleados.Nombre,empleados.Correo)
    console.log(r)
})
db.close()