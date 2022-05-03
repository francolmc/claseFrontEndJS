function add1(a, b) {    
    return a + b;
}
// comentario1
/* 
comentario de mas lineas
*/
const add2 = (a, b) => a + b;

const add3 = (a, b) => {
    return a + b;
}

function addReturnDiv(a, b) {
    document.getElementById('result').innerHTML = a + b;
}

function addReturnDivFormat1(a, b) {
    document.getElementById('result').innerHTML = 'El resultado de la suma es: ' + (a + b);
}

function addReturnDivFormat2(a, b) {
    document.getElementById('result').innerHTML = `El 
    resultado 
    de la suma 
    es: ${a + b}`;
}