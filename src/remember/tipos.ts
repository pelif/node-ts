let num1: number = 10.50;
let num2: number = 20;

console.log(num1 + num2)

let Name: string = "Felipe Daniel de Oliveira"; 

console.log(Name); 

let arrayStrings: Array<string> = ['nome1', 'nome2', 'nome3'];

console.log(arrayStrings)

let arrayNumbers: Array<number> = [100,200,300,400];

console.log(arrayNumbers)

let arrayAny: Array<any> = ['Pelif', 38, 10.5, 'Oliveira']

console.log(arrayAny)

enum estado_civil {
    solteiro = "solteiro",
    casado = "casado",
    divorciado = "divorciado"
};

let MyState:estado_civil = estado_civil.casado;
if(MyState == estado_civil.casado) {
    console.log("Sou Casado!")
}
