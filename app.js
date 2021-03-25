// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;
// Entrada.
const products = [{
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

//1.Create HTML
//Create Elements
var container = document.getElementById("product-list-container");
var calculo = document.getElementById("calculo");



//Recorrer la lista

var createDescription = product => {
    var description = document.createElement("label");
    description.innerText = product.description + " - " + product.price + "€/ud.";
    container.appendChild(description)
}
var createInput = product => {
    var input = document.createElement("input");
    input.setAttribute("type", "number");
    input.addEventListener("change", event => (product.units) = event.target.valueAsNumber);
    container.appendChild(input);
}
var createSpace = () => {
    var br = document.createElement("br");
    container.appendChild(br);
}
var createSubtotal = () => {
    var span = document.createElement("span");
    span.innerText = "Subtotal: ";
    var subtotal = document.createElement("span");

    subtotal.innerText = subTotal(products) + " €";
    calculo.appendChild(span);
    calculo.appendChild(subtotal);
}
var subTotal = productList => {
    var total = 0;
    for (var product of productList) {
        total += product.price * product.units;
    }
    return total;
}
var CreateIva = (product) => {
    var span = document.createElement("span");
    span.innerText = "IVA : ";


}
var iva = () => {
    precio total producto * IVA / 100.
}


var showProducts = productList => {
    for (var product of productList) {

        createDescription(product);
        createInput(product);
        createSpace();

    }
}
showProducts(products);
document.getElementById("calcular").addEventListener("click", createSubtotal)




// var input = document.createElement("input");
// input.setAttribute("class", "product-unit");
// input.setAttribute("type", "number");
// input.setAttribute("value", 5);
// input.addEventListener("change", event => console.log(event.target.value));
// var main = document.getElementById("product-list-container");
// main.appendChild(input);