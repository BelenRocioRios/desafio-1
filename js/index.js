const suma = (a,b) => a + b
const resta = (a,b) => a - b 


const iva  = x => x * 0.21

let precioproducto = 500
let descuento = 50

let nuevoprecio = resta (suma(precioproducto, iva(precioproducto)), descuento)

console.log(nuevoprecio)