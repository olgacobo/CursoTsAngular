type s = string;
type n= number;
type dni= number;

class persona{
    private edad: n;
    private altura: n;
    private dni: s;

    constructor(edad: n, altura: n, dni: s ){
        this.edad=edad;
        this.altura=altura;
        this.dni=dni;
    }
}

class alumno extends persona{
    private matricula: s;
    constructor(edad: n, altura: n, dni: s , matricula: s){
        super(edad, altura, dni)
        this.matricula=matricula;
    }

}

let persona1: persona = new persona(26,1.64, '123456789');
let alumno1: alumno = new alumno(26,1.64, '9876543', 'matricula');
//no da error ya que todos los alumnos son personas, pero no todas la personas son alumnos
persona1 = alumno1;
// da errorassssso, podria ser un profe, limpiadors, etc
//alumno1 = persona1;
