// antes

function newFunction(name, age, country) {
  var name = name || "Eduardo";
  var age = age || 22;
  var country = country || "GT";
  console.log(name, age, country);
}

// es6

function newFunction2(name = "Eduardo", age = 22, country = "GT") {
  console.log(name, age, country);
}

newFunction2(); // al invocarla sin argumentos tomara el parametro por defecto
newFunction2("Ricardo", "23", "COL"); // al invocarla sin argumentos tomara el parametro por defecto

// template literals

let hello = "hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//strings multilinea

//antes
let lorem = "lorem ipsun \n" + "otra frase epica";

// es6
let lorem2 = `otra frase epica 
Ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

// Desestructuracion de objetos
let person = {
  name: "Eduardo",
  age: "22",
  country: "Guatemala",
};

console.log(person.name, person.age);

// con desestructuracion

let { name, age } = person;
console.log(name, age);

//Estructuracion con arrays

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);

// var let y const

{
  var varglobal = "GLobal var";
}
{
  let letglobal = "Global let";
  console.log(letglobal);
}

console.log(varglobal);

// Arrow Functions, Promesas y Parámetros en objetos

let name = "Eduardo";
let age = 22;

// es5
// obj = {name = name, age = age}

// es6
obj2 = {
  name,
  age,
};
console.log(obj2);

// ARROW FUNCTION

const names = [
  { name: "Eduardo", age: 22 },
  { name: "Yesica", age: 27 },
];

let listOfName = names.map(function (item) {
  console.log(item.name);
});

let listOfNames = names.map((item) => console.log(item.name));

const listOfName3 = (name) => {
  console.log("Hola");
};

const listOfName4 = (name) => {
  console.log("hola");
};

const square = (num) => num * num;

// Promesas

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey todo bien");
    } else {
      reject("Ups");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

//Clases, Módulos y Generadores

// clases y constructores
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(3, 2));

// imports y exports

import { hello } from "./module";

hello();

// generadores

function* helloWorld() {
  if (true) {
    yield "hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

function* fibonacci() {
  var fn1 = 1;
  var fn2 = 1;
  while (true) {
    var actual = fn2;
    fn2 = fn1;
    fn1 = fn1 + actual;
    var reset = yield actual;
    if (reset) {
      fn1 = 1;
      fn2 = 1;
    }
  }
}

var secuencia = fibonacci();
