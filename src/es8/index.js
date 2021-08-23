//entriees

const data = {
  frontend: "Eduardo",
  backend: "ISabel",
  design: "Ana",
};

const entries = Object.entries(data);

console.log(entries);
console.log(entries);

// valores

const data = {
  frontend: "Eduardo",
  backend: "ISabel",
  design: "Ana",
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

//padding

const hello = "hello";
console.log(hello.padStart(7, "hi"));
console.log(hello.padEnd(12, " -----"));

// Asyn await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld;
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
