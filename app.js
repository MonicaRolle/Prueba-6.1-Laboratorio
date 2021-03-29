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
    var description = document.createElement("li");

    description.innerText = product.description + " - " + product.price + "€/ud.";
    container.appendChild(description)
}
var createInput = product => {
    var input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("max", product.stock)
    input.setAttribute("min", 0)
    input.addEventListener("change", event => (product.units) = event.target.valueAsNumber);
    container.appendChild(input);
}


function subTotal() {
    var total = 0;
    for (var product of products) {
        total += product.price * product.units;
    }
    return total;
}

function iva() {
    var iva = 0;
    for (var product of products) {
        iva += (product.price * product.units) * product.tax / 100;
    }
    return iva;
}

var showProducts = () => {
    for (var product of products) {
        createDescription(product);
        createInput(product);

    }
}
showProducts(products);
document.getElementById("calcular").addEventListener("click", () => showPrices(iva(), subTotal()))

function showPrices(iva, subTotal) {
    var total = iva + subTotal;
    document.getElementById("subtotal-text").innerText = subTotal + "€";
    document.getElementById("iva-text").innerText = iva + " €";
    document.getElementById("total-text").innerText = total + "€";

}