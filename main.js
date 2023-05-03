// Bienvenida al usuario
alert("Bienvenido a Tienda para martinhouse");

let opcion;
let productos = [
    { nombre: "Bufanda", precio: 7850 },
    { nombre: "Camisa", precio: 12499 },
    { nombre: "Pantalon", precio: 15000 },
    { nombre: "Zapatillas", precio: 19900 },
    { nombre: "Campera", precio: 22000 },
];

let carrito = [];
let descuento = 0;
let total = 0;

function mostrarProductos() {
    let listaProductos = "Productos disponibles:\n";
    for (let i = 0; i < productos.length; i++) {
        listaProductos += `${i + 1}. ${productos[i].nombre}\n`;
    }
    return listaProductos;
}

opcion = prompt(
    "¿Desea comprar o solo ver? Ingrese 'comprar' o 'ver':"
).toLowerCase();

// Si selecciona solo ver, mostrar el nombre de la tienda y los productos
if (opcion === "ver") {
    alert(`Tienda para martinhouse\n${mostrarProductos()}`);
}

// Si selecciona comprar, mostrar los productos y dar opciones de compra
if (opcion === "comprar") {
    do {
        let seleccion = parseInt(prompt(`${mostrarProductos()}\nIngrese el número del producto que desea comprar:`));
        if (seleccion > 0 && seleccion <= productos.length) {
            carrito.push(productos[seleccion - 1]);
            alert(`Se ha agregado ${productos[seleccion - 1].nombre} a su carrito.`);
        } else {
            alert("El número ingresado no es válido.");
        }
        opcion = prompt("¿Desea seguir comprando? Ingrese 'si' o 'no':").toLowerCase();
    } while (opcion === "si");

    // Parte final
    let detalleCompra = "Detalle de su compra:\n";
    for (let i = 0; i < carrito.length; i++) {
        detalleCompra += `${i + 1}. ${carrito[i].nombre}: $${carrito[i].precio}\n`;
        total += carrito[i].precio;
    }

    // Descuento
    opcion = prompt("Ingrese el código de descuento si lo tiene, sino escriba 'no':");
    if (opcion === "1234") {
        descuento = total * 0.15;
        total -= descuento;
    }

    // Calcular el IVA y el total final
    let iva = total * 0.21;
    total += iva;

    // Detalle de la compra
    detalleCompra += `Descuento: $${descuento.toFixed(2)}\nIVA: $${iva.toFixed(2)}\nTotal: $${total.toFixed(2)}`;
    opcion = prompt(`${detalleCompra}\n¿Desea comprar? Ingrese 'si' o 'no':`).toLowerCase();


    if (opcion === "si") {
        alert("¡Gracias por su compra!");
    } else {
        alert("Muchas gracias de todas formas, ¡te esperamos otro día!");
    }
}

