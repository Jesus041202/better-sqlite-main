import Database from "better-sqlite3";
const db = new Database('app.db');

// ID del departamento que queremos eliminar
const individualData = { id: 2 };

// Eliminar el departamento basado en su `id`
const deleteData = db.prepare(`DELETE FROM departamentos WHERE id = ?`);

const result = deleteData.run(individualData.id);
console.log(`Se ha eliminado el departamento con ID: ${individualData.id}, Filas afectadas: ${result.changes}`);

db.close();
