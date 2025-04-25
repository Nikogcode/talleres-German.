// 6. Crear una clase Universidad con un atributo estático numEstudiantes y un método estático registrarEstudiante()

class Universidad {
    static numEstudiantes = 0;

    static registrarEstudiante(){
        this.numEstudiantes++;
        console.log(`Estudiante registrado, el numero de estudiantes registrados es ${this.numEstudiantes}`);
    }
}

Universidad.registrarEstudiante();
Universidad.registrarEstudiante();