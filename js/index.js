let displayAnterior=document.getElementById('valor-anterior')
let displayActual=document.getElementById('valor-actual')
let botonesNumeros=document.querySelectorAll('.numero')
let botonesOperador=document.querySelectorAll('.operador')


console.log(displayAnterior)
console.log(displayActual)
console.log(botonesNumeros)
console.log(botonesOperador)
const display = new Display(displayAnterior, displayActual);
// const calcular= new Calculadora();


// console.log(calcular.sumar(3,3))
botonesNumeros.forEach(boton=>{
    boton.addEventListener('click',()=>{
        display.agregarNumero(boton.innerHTML)
    })
})
botonesOperador.forEach(boton=>{
    boton.addEventListener('click',()=>{
        display.computar(boton.value)
    })
})