//creamos un tipo que pueda ser numero o string
type SumaPArameter = string | number
type SumaReturnType = number | string;

function suma(n1: SumaPArameter,n2: SumaPArameter): SumaReturnType{
    return String(n1)+n2;
}

interface I1{
    prop1: number;
}

interface I2{
    prop2: number;
}

//creamos un tipo que sea una interfaz
type interfaceMix = I1 | I2;

const I3:  interfaceMix={ 
    prop2: 2,
    prop1: 5
}

