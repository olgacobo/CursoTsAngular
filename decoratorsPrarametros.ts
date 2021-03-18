type s = string;
type n= number;
//para extender la funcionalidad del parametro creamos una funcion
function logParameter(target, propertyName, index){

    const metadataKey = `log_${propertyName}_parameters`;

    if(Array.isArray(target[metadataKey]){
        target[metadataKey].push(index);
    }
    else{ 
        target[metadataKey]=[index];
    }

}

//creo una clase que tiene un greet(saludo) al que le paso un mensaje y me devuelve dicho mensaje
class p{
    greet( @logParameter message: s): s{
        return message;
    }
}

//instanciamos
const p1 = new p();
p1.greet('Hola');//cada vez que hagamos un greet vamos a estar configurando el metadata