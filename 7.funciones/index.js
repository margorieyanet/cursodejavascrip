//pasos para construir una función
//1. palabra reservada fuction
//2. ponerle un nombre que describa el trabajo que realizara la funcion
//3. la funcion puede resivir parametros 
//pero si o si indicar que tendra parametros
// ()
// (lista de amigos)
// (edad, nombre)
//4. DATO IMPORTANTE. una funcion siempre tiene que retornar un tipo de dato 
function saludo(nombre,apellido){
    let saludo='hola como estas'+nombre+' '+apellido
    return saludo
}
//para usar una funcion debo llamar a la funcion
console.log(saludo('rafael','olarte'))
console.log(saludo('margorie','espinoza molina'))





let texto='mi mama me quiere'
let contador=0
for (let i=0;i<texto.length;i++){
    switch(texto[i]){
        case 'a' :case 'e':case 'i':case 'o':case 'u':
        ++contador
    }
}
console.log(contador)


//funcion calculadora(num1,num2,operaciones){retur total}

//calculadora(45,12,'suma') //57
//calculadora(45,12,'resta') //33

function calcular(num1, num2,operaciones){
    if (operaciones=='suma'){
        total=num1+num2
    }
    if (operaciones=='resta'){
        total=num1-num2
    }
    if (operaciones=='multiplicacion'){
        total=num1*num2
    }
    if (operaciones=='división'){
        total=num1/num2
    }
    return total
} 
console.log (calcular(15,50,"suma"))







    



 
