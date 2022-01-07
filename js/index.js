let displayAnterior=document.getElementById('valor-anterior')
let displayActual=document.getElementById('valor-actual')
let botonesNumeros=document.querySelectorAll('.numero')
let botonesOperador=document.querySelectorAll('.operador')

const display = new Display(displayAnterior, displayActual);

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