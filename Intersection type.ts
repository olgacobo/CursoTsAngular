type s = string;
type n= number;

interface I1{
    prop1: n;
}

interface I2{
    prop2: n;
    prop3: n;
}

interface I3{
    prop1: n;
}

type Imix = I1 & I2 & I3;

//tienen que tener tooooodas las propiedades de todas las interfaces
const I4: Imix = {
    prop1: 1, //no da problemas porque es la misma propiedad que esta en 2 matirces distrintas
    prop2: 2,
    prop3: 3
}