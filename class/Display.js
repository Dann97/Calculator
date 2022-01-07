class Display{
    constructor(displayValorAnterior,displayValorActual){
        this.displayValorAnterior=displayValorAnterior;
        this.displayValorActual=displayValorActual;
        this.calculador= new Calculadora();
        this.tipoOperacion=undefined;
        this.valorActual='';
        this.valorAnterior='';
        this.signos = {
            sumar:'+',
            multiplicar:'x',
            dividir:'/',
            restar:'-'
        }

    }
    borrarNumero(){
        this.valorActual=this.valorActual.toString().slice(0,-1);
        this.mostrarNumeros();
    }
    borrarTodo(){
        this.valorActual='';
        this.valorAnterior='';
        this.tipoOperacion= undefined;
        this.mostrarNumeros()
    }
    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion= tipo;
        this.valorAnterior= this.valorActual || this.valorAnterior;
        this.valorActual='';
        this.mostrarNumeros();
    }
    agregarNumero(numero){
        if(numero==='.' && this.valorActual.includes('.')) return 
        this.valorActual=this.valorActual.toString() + numero.toString();
        this.mostrarNumeros();
    }
    mostrarNumeros(){
        this.displayValorActual.textContent=this.valorActual;
        this.displayValorAnterior.textContent=`${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`  ;
    }
    calcular(){
        const valorAnterior=parseFloat(this.valorAnterior);
        const valorActual=parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return 
        this.valorActual=this.calculador[this.tipoOperacion](valorAnterior,valorActual)
    }
}