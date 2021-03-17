// function suma(n1: number,n2: number): number{
//     return n1+n2;
// }

type s = string;
type n= number;

class transporte{
    private velocidad: n;
    private formaMovilidad: s;

    constructor(velocidad: n, formaMovilidad: s){
        this.velocidad = velocidad;
        this.formaMovilidad = formaMovilidad;
    }

    getVelocidad(){
        return this.velocidad;
    }

    setVelocidad(velocidad: n){
        this.velocidad = velocidad;
    }

    getformaMovilidad(){
        return this.formaMovilidad;
    }

    setformaMovilidad(formaMovilidad: s){
        this.formaMovilidad = formaMovilidad;
    }
}

//para instanciar:
const bici: transporte = new transporte(20, "suelo");

//creamos otra clase que va a extender a transporte, podra acceder a toda las variables de transporte
class coche extends transporte{
    private puertas: n;

    constructor(velocidad: n, formaMovilidad: s, puertas: n){
        //asi traigo los this.arg de la clase padre
        super(velocidad, formaMovilidad);
        this.puertas = puertas;
    }
     //no hace falta hacer los get y set del padre
    getVelocidad(){
        return super.getVelocidad();
    }

    getPuertas(){
        return this.puertas;
    }

    setPuertas(puertas: n){
        this.puertas=puertas;
    }  

}

//instanciamos
const coche1: coche = new coche(100, "suelo", 4);