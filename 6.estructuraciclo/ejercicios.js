//un programa que muestra el factorial de un número
function factorial(num) {
    if (num==00) return 1
    return (num*factorial(num-1))
}
//hacer un programa que me determine si un texto es un palindromo
function palindromeChecker(str) {
    const strReversed = str.split("").reverse().join("");
  
    return strReversed === str ? "es palindromo" : "no es palindromo";
  }
  console.log(palindromeChecker("oso")); // es palindromo
  console.log(palindromeChecker("hola")); // no es palindromo
  console.log(palindromeChecker("omo")); // es palindromo

//hacer un programa que me muestre los numeros de la serie de fibonacci
#include<iostream>
using namespace std;
int main()
{
    int i,a = 0,b = 1,c,n;
    cout<< "Ingresa el valor de n: ";
    cin>> n;
    for (i = 1; i <= n; i++){
        cout<< a <<" ";
        c = a + b;
        a = b;
        b = c;
    }
    return 0;
}