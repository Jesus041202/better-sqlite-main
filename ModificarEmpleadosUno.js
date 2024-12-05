import Database from "better-sqlite3";
const db = new Database('app.db');

// Datos individuales que queremos actualizar
const individualData = { id: 2, newnombre: "Jesus", newcorreo: "jesus@gmail.com" };

// Actualizar los datos de un usuario basado en el `id`
const ModData = db.prepare(`UPDATE empleados SET nombre = ?, correo = ? WHERE id = ?`);

const result = ModData.run(individualData.newnombre, individualData.newcorreo, individualData.id);
console.log(`Se ha actualizado el usuario con ID: ${individualData.id}, Filas afectadas: ${result.changes}`);

db.close();
