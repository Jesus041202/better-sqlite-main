import Database from "better-sqlite3";
const db = new Database('app.db');

// ID del Empleado que queremos eliminar
const individualData = { id: 2 };

// Eliminar el Empleado basado en su `id`
const deleteData = db.prepare(`DELETE FROM empleados WHERE id = ?`);

const result = deleteData.run(individualData.id);
console.log(`Se ha eliminado el Empleado con ID: ${individualData.id}, Filas afectadas: ${result.changes}`);

db.close();
