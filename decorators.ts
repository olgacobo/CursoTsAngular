type s = string;
type n= number;

function decorator(target, key){
    console.log(key + 'se ha llamado');
}

class persona{
    private name: s;
    
    constructor(name: s){
        this.name=name;
    }
    /*decorator es nuestra funcion, al llamarlo automaticamente se implementa al elemento que siga
    en este caso la funcion sayMyName, eñ target en este caso seria persona y la key hace referencia
    al elemento que estamos extendiendo, en este caso sayMyName,
    por lo que en consola saldra literalmente sayMyName se ha llamado*/
    @decorator
    //da error porque hay que añadir en la configuracion de Typesript hay que poner el soporte de decoradores en true
    sayMyName(){
        //return this.name;
        console.log(this.name)
    }
}

const p1: persona = new persona('Olga');
//p1.sayMyName(); //en consola vamos a ver olga