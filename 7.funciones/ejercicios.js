//FUNCIONES RECURSIVAS
//concepto
//Las funciones recursivas son aquellas que se invocan a si mismas en algún momento de su ejecución.
//La recursión permite programar algoritmos aparentemente complicados con un código simple y claro.
//pero hay que tener en cuenta que en ocasiones ralentizará el programa en exceso.
//ejemplo calculo del factorial de un número entero
//1: ejemplo utilizando la Funcion Recursiva
function factorial(n) {
    if (n<=1) return 1;
    return n* factorial(n-1);
}
//2: lo normal usando bucle
function factorial(n){
    var res = 1;
    for(var i=n; i>=1; i--){
      res = res * i;
    }
    return res;
  }
  