

/*
Haciendo pruebas unitarias propias 
Primera Forma de realizar los casos de prueba

*/

const suma = (a,b)=>{
    return a-b;
   }
   
   // console.assert(
   //     suma(1,3)=== 4, "Suma de 1 y 3 debe ser 4"
   // )
   // console.assert(
   //     suma(0,0)=== 0, "Suma de 0 y 0 debe ser 0"
   // )
   
   
   /**
    * Segunda Prueba 
   */
   
   const check=[
       {a:1,b:2,result: 3},
       {a:2,b:2,result: 4},
       {a:0,b:0,result:0},
       {a:2,b:4,result: 6}
   ]
   
   check.forEach(element => {
       const {a,b,result} = element;
       console.assert(suma(a,b) === result, `El resultado de ${a} mas ${b} deberia de ser ${result}`)
   });