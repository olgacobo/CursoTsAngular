type s = string;
type n= number;
type dni= number;

interface persona{
    // la ? lo que indica es que este parámetro es opcional
    altura?: n;
    edad: n;
    nombre: s;
    apellido: s;
    dni: dni;

}
 //creamos un objeto persona
const p1: persona = {
    //altura: 1.64,
    edad: 26,
    nombre: 'Olga',
    apellido: 'Cobo',
    dni: 123

}