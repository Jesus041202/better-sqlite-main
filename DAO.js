// Importar la biblioteca better-sqlite3
import Database from "better-sqlite3";

// Conexión a la base de datos
const db = new Database("app.db");

// Crear la tabla `departamentos` si no existe
db.exec(`
  CREATE TABLE IF NOT EXISTS departamentos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL
  );
`);

// Función para listar todos los departamentos
function listarDepartamentos() {
  const query = "SELECT * FROM departamentos;";
  const departamentos = db.prepare(query).all();
  console.log("Lista de Departamentos:", departamentos);
}

// Función para agregar un departamento
function agregarDepartamento(nombre) {
  const query = "INSERT INTO departamentos (nombre) VALUES (?);";
  const result = db.prepare(query).run(nombre);
  console.log(`Departamento agregado con ID: ${result.lastInsertRowid}`);
}

// Función para eliminar un departamento por ID
function eliminarDepartamento(id) {
  const query = "DELETE FROM departamentos WHERE id = ?;";
  const result = db.prepare(query).run(id);
  console.log(`Departamento eliminado con ID: ${id}, Filas afectadas: ${result.changes}`);
}

// Función para actualizar un departamento por ID
function actualizarDepartamento(id, nuevoNombre) {
  const query = "UPDATE departamentos SET nombre = ? WHERE id = ?;";
  const result = db.prepare(query).run(nuevoNombre, id);
  console.log(`Departamento actualizado con ID: ${id}, Filas afectadas: ${result.changes}`);
}

// Función para buscar un departamento por ID
function buscarDepartamento(id) {
  const query = "SELECT * FROM departamentos WHERE id = ?;";
  const departamento = db.prepare(query).get(id);
  console.log("Departamento encontrado:", departamento);
}

// Ejemplo de uso
console.log("Operaciones CRUD en la tabla departamentos:\n");

// Altas (Agregar)
agregarDepartamento("Recursos Humanos");
agregarDepartamento("Tecnología");
agregarDepartamento("Marketing");

// Listar
listarDepartamentos();

// Buscar
buscarDepartamento(1);

// Cambios (Actualizar)
actualizarDepartamento(2, "Desarrollo de Software");

// Listar nuevamente
listarDepartamentos();

// Bajas (Eliminar)
eliminarDepartamento(3);

// Listar después de eliminar
listarDepartamentos();

// Cerrar la conexión a la base de datos
db.close();
