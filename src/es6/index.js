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
