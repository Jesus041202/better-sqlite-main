import Database from "better-sqlite3";
const db = new Database('app.db');

// Datos individuales que queremos actualizar
const individualData = { id: 2, newName: "Juan Carlos", newUsername: "jc2" };

// Actualizar los datos de un usuario basado en el `id`
const ModData = db.prepare(`UPDATE users SET name = ?, username = ? WHERE id = ?`);

const result = ModData.run(individualData.newName, individualData.newUsername, individualData.id);
console.log(`Se ha actualizado el usuario con ID: ${individualData.id}, Filas afectadas: ${result.changes}`);

db.close();
