/*
Retomando las APIs...

    - APIs internas (API, DOM, LocalStorage, Drag and Drop): Son todas aquellas APIs que vienen por default en el navegador.

    - APIs externas (Google Maps, FakeStore API, API PayPal, etc.): Son todos aquellas que tenemos que utilizar de proveedores externos.

    Ejemplo de la licuadora, donde la licuadora es el cliente, el enchufe es la AP y el recurso que se solicita es la electricidad.

    Ventajas de utilizar APIs
        - Reestructurar y organizar los sistemas de forma que son más sencillos de usar.
        - Permiten que los sistemas sean más robustos
        - Reducen los costos de mantenimiento 
        - Permiten que los sitemas son escalables
*/


/*

Sincronía

Por defecto, JS se comporta de una forma sincrona (de arriba hacia abajo, de izquierda a derecha), es decir, utilizamos JS de una forma autobloqueante (si hay un error, lo que está después de ese error no se ejecuta).
*/

//Ejemplo de una operación sincrónica
// console.log("Inicia mi operación sincrona");

// function dosSincronica() {
//     console.log("Dos");
// }

// function unoSincronico() {
//     console.log("Uno");
//     dosSincronica();
//     console.log("Tres");
// }
// unoSincronico();
// console.log("Finaliza mi operación sincrona");

//Los casos donde me conviene tener operaciones síncronas, son (lectura de arrays, uso de algunos métodos de arrays, condicionales, ciclos, ejecución de funciones "normales").

/*

Asincronía

Es la capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. Esto nos ayyud a ejecutar ciertos bloques de código sin tener que esperar a que termine su ejecución, para ejecutar otras línea de código. (dejar la carne en el sadador mientras preparo otras cosas en el ejemplo de la carne asada).
*/

//Ejemplo de JavaScript Asincrono

console.log("incia mi operacion asincrona");
function dosAsync() {
    console.log("Uno");
    setTimeout(function () { //setTime para ejecutar esta función después de 3 segundos
        console.log("Dos");
    }, 3000);
}

function unoAsync() {
    dosAsync();
    console.log("Tres");
}
unoAsync();
console.log("finaliza mi operación asincronica");

/*
Mecanismos para manejar la asincronía

Para controlar la asicronía en JS, podemos usar de estos mecanismos:

    - callback: la forma más clásica es manejar la asincronía. Se le conoce como (Llamada de vuelta), básicamente es pasar una función como parámetro de otra función, y se ejecutan una vez que se cumpla la condición esperada.

    //Método .map de los arrays


    - promesas: Son objetos que van a representar un valor al momento de conectar con el servidor. Como su nombre lo indica, una promesa es algo que no sabemos sí s e va a cumplir o no, pero al menos necesitamos saber qué hacermos si se cumple o si no se cumple. La ventaja que tiene las promesas, es que no se anidan, en una sola función podemos manejar ambas situaciones.

    Las promesas tiene 3 estados posibles:

        -pending: estado inicial, cuando se crea la promesa. Aquí apun no hay resultados. 
        - fullfield: cuando la operación asincrona se resuelve con exito (resolve)
        - rejected: cuando la operación asincrona falla (reject)


*/

//Función especial para consumir APIs y manejar promesas

//instrucción de la conexión a mi servidor
fetch("https://fakestoreapi.com/products/1")

    //dos escenarios (obtengo respuesta o no obtengo respuesta)
    .then(datos => { //cuando la promesa se resuelve, ejecuto esta función
        console.log(datos);
        return datos.json(); //convertir la respuesta

    })
    .catch(error => {
        console.log("Error, no encontramos el producto");
        console.log(error.message);
    })

/* Sintaxis del fetch (con promesas)
    fetch (url a consumir)
    .then (response=> response.text()) //manejo la respuesta
    .then (datos => console.log(datos)) //manejo el dato

    .catch(error => console.log(error));
*/

//asigno el fetch a una variable...
const conexion = fetch("https://fakestoreapi.com/products/1");

//imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto Promesa: ", conexion);

//referencia a mi fetch para poder usar sus metodos
conexion

    //usar el metodo then para manejar la respuesta(lo relleno con la respuesta)
    .then(function (resultado) {
        console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
        return resultado.json();
    })

    //uso el metodo then para manejar el producto(lo rellenoo con la info del producto)
    .then(function (producto) {
        console.log("Informacion del producto: ", producto);
    })

    //uso el metodo catch para manejar el error (lo relleno con un error para que la caja no regrese vacia)
    .catch(function (error) {
        console.log("Error", error);
    })

let respuestaServidor = "Felipe de Jesus Maqueda Gonzalez, 31, 2, 1"; //texto plano

//producto como respuesta de un servidor en formato plano (texto)
let productoServidor = { "id": 17, "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats", "price": 39.99, "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", "category": "women's clothing", "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg", "rating": { "rate": 3.8, "count": 679 } }

//producto como objeto JSON
let productoJSON = {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
        rate: 3.8,
        count: 679
    }
}

//Revisar información de un objeto con texto plano
console.log(productoServidor.category);

//Revisar información de un objeto tipo JSON
console.log(productoJSON.price);


/*producto convertido a un objeto JSON
const productoString = JSON.stringify(producto);
let prodcutoJSON = JSON.parse(producto);
//console.log(prodcutoJSON);*/

//Objeto JSON que voy a mandar a un servidor
let paciente = {
    nombre: "Felipe",
    edad: 31,
    estatus: "Registrado"
}

console.log(paciente);

//Necesito convertirlo a una cadena de texto para que el servidor lo lea

let pacienteStringifeado = JSON.stringify(paciente);
console.log(pacienteStringifeado);

let pacienteServidor = '{ "nombre": "Felipe", "edad": 31, "estatus": "Registrado" }';

let pacienteJSON = JSON.parse(pacienteServidor);
console.log(pacienteJSON);

//Si mando un JSON al servidor, lo stringifeo
//Si recibo un string del servidor, lo parseo

function generarTarjetaProdcuto() {

    //crear elemento
    creatElement(img);
    img.src = producto.image;
}



//Método POST para enviar un nuevo producto a nuestra BD de la FakeStoreAPI
/*fetch('https://fakestoreapi.com/products', {//endpoint
    method: "POST", //especificar el tipo de método
    body: JSON.stringify( //instrucción para serializar el cuerpo de mi solicitud (para la interpretación del servidor)
        {
            title: 'Sopa Maruchan Habanero ',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://media.justo.mx/products/041789001956.jpg',
            category: 'Sopas instantáneas'
        }
    )
})
    .then(res => res.json()) //método para la respuesta (saber que mi producto llegó con bien al servidor)
    .then(json => console.log(json)) //impresión en consola para revisar la info. */

fetch('https://fakestoreapi.com/products', { //endpoint
    method: "PUT", //especificar el tipo de metodo
    body: JSON.stringify( //instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
        {
            id: 1,
            title: inputTitulo.value,
            price: inputPrecio.value,
            description: inputDescripcion.value,
            image: inputImagen.value,
            category: inputCategoria.value
        }
    )
})
    .then(res => res.json()) //metodo para la respuesta (saber que mi producto llego con bien al servidor)
    .then(json => console.log(json))//impresion en consola para revisar la info
