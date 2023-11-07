// Objeto Persona con las propiedades nombre, edad y género
const Persona = {
    nombre: "",
    edad: 0,
    genero: "",
    obtDetalles: function() {
        console.log(`El nombre es: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}`)
    }
}

// Objeto Estudiante que hereda de Persona
const Estudiante = Object.create(Persona)
Estudiante.curso = ""
Estudiante.grupo = ""
Estudiante.registrar = function() {
    console.log(`El nombre es: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}, curso: ${this.curso}, grupo: ${this.grupo}`)
}

// Objeto Profesor que hereda de Persona
const Profesor = Object.create(Persona)
Profesor.asignatura = ""
Profesor.nivel = ""
Profesor.asignar = function() {
    console.log(`El nombre es: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}, asignatura: ${this.asignatura}, nivel: ${this.nivel}`)
}
