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
