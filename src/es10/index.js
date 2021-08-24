// flat permite aplanar un array

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap((value) => [value, value * 2]));

// eliminar espacio innescesarios con strings.
let hello = "        hello world";
console.log(hello);
console.log(hello.trimStart());

let hello = "hello world          ";
console.log(hello);
console.log(hello.trimEnd());

//Ahora catch tiene directamente a error integrado en try catch

try {
} catch {}

// Pasar un arreglo a objeto

let entries = [
  ["name", "oscar"],
  ["age", 32],
];

console.log(Object.fromEntries(entries));

// objeto de tipo simbolo

let mySymbol = "my symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
