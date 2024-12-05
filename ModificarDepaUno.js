import Database from "better-sqlite3";
const db = new Database('app.db');

// Datos individuales que queremos actualizar
const individualData = { id: 2, newNombre: "Jesus"};

// Actualizar los datos de un usuario basado en el `id`
const ModData = db.prepare(`UPDATE departamentos SET nombre = ? WHERE id = ?`);

const result = ModData.run(individualData.newNombre, individualData.id);
console.log(`Se ha actualizado el usuario con ID: ${individualData.id}, Filas afectadas: ${result.changes}`);

db.close();