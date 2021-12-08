class Producto{
    constructor (nombre,precio){
        this.nombre = nombre
        this.precio = parseFloat(precio);  // aplica float al precio
        this.vendido = false;
    }
    sumIva(){
        this.precio = this.precio*1.21; // agrega el iva al precio
    }
}

const productos= []; // array de productos
productos.push (new Producto ("aspirante", "1800")); //agrega el producto al array
productos.push (new Producto ("aspirapolvo", "2000"));//agrega el producto al array
productos.push (new Prodcuto ("electricidad", "1700"));//agrega el producto al array
productos.push (new Producto ("hogar", "1500"));//agrega el producto al array
productos.push (new Producto ("piscinas", "1800"));//agrega el producto al array

productos.sort() //ordena los productos

for (const producto of productos) //aplica for of para agregarle el iva a todos los productos
        producto.sumIva();








