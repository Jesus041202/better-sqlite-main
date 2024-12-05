import Database from "better-sqlite3";
const db = new Database('app.db');

const data = [
    {name: "ana", username: "an1"},
    {name: "juan", username: "ju2"},
    {name: "bety", username: "be3"},
    {name: "paco", username: "pa0"},
    {name: "luis", username: "lu5"}
];

// Comando SQL para actualizar los datos en la tabla users
const ModData = db.prepare(`UPDATE users SET name = ? WHERE username = ?`);

data.forEach(user => {
    const r = ModData.run(user.name, user.username);  // Aquí se actualiza el nombre según el username
    console.log(`Rows affected: ${r.changes}`); // Muestra cuántas filas fueron afectadas
});

db.close();
