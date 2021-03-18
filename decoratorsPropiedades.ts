type s = string;
type n= number;

//vamos a hacer que cada vez que obtenga un valor a la propiedad nombre o la seteemos  se escriba por pantalla la accion
//target es la clase persona que contiene el elemento, key es el elemento ensi
function propiedadRegistro(target, key){
    //vamos a obtener el valor de nuestra propiedad(nombre), dentro del contexto de esta fiuncion vamos a obtener aquella propiedad que tenga como nombre key
    let valor = target[key];
    //setteamos un getter, cuya funcionalidad va a ser el log que estamos buscando
    const getter = () =>{
        console.log(`get: ${key} => ${valor}`);
        return valor;
    }
    // tendra como propiedad el nuevo valor que estamos obteniendo
    const setter = (newValor) =>{
        console.log(`set: ${key} => ${newValor}`);
        valor=newValor;
    }
    // 3 paso, a nuestoo objeto vamos a tener qeu definir este getter y setter
    const  objectProperty={
        get: getter,//sobreescribimos los get y set de nuestro objeto con los que nosotros hemos creado
        set: setter
    }
    Object.defineProperty(target, key, objectProperty); 

}


class persona{
    
    @propiedadRegistro
    public nombre: s;
    
    constructor(nombre: s){
        this.nombre=nombre;
    }
}

const p = new persona('Olga');
p.nombre = 'Aglo'; // aqui lo que hacemos es un set: name => ${newValor} que en esrte caso es aglo
const nombreDeClase = p.nombre; // aqui hacemos un get: name => ${valor} que en este caso seria alglo porque lo hemos setteado en la linea anterior