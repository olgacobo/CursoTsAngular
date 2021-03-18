type s = string;
type n= number;

//el targer en este caso es nuestra clase p
function init(target){
    return class extends target{ //incluimos todo lo que tenia la clase p y lo estamos extendiendo para poder sobreescribirlo
        nombre = 'Olga';
        apell = 'Cobo';

        diminombre(){ //sobreescribiremos el metodo
            return `${ this.nombre }  ${ this.apell }`;
        }
    }
}

@init //decorador y lo que va a extender es la clase p
class p {
    constructor(){}

    diminombre(){}
}

const per: p = new p();
console.log(per.diminombre()); //sacara por consola Olga Cobo, extendiendo la logica inicial mediante la funcion init

