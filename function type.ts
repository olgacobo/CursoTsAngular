type s = string;
type n= number;

// este alias puede ser error o nulo
type callBackError = Error | null;
//recibe como parametro un error de tipo callBackError y un response de tipo objeto
type callBack = (error: callBackError, response: Object) => void;
//void porque la funcion no devuelve nada
type SendRequest = (cb: callBack) => void;


//cb es un callback
// function sendRequest(cb: callBack): void{
//     if (cb){
//         cb(null, { message: 'Todo salio bien' });
//     }
// }
 //funcion que llama a otra funcion
const funcionSend: SendRequest = (cb: callBack): void => {
    if (cb){
        cb(null, { message: 'Todo salio bien' });
    }
}

//otro ejemplo
//creo un typo funcion al que se le pasan los parametros base y altura(ambos numeros) y devuelve un numero
type areaRectangulo = (base: n, altura: n) => n;

const getAreaRectangulo: areaRectangulo = (base: n, altura: n) => { return base*altura; }


