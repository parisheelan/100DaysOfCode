let age = 30;
age = 32;
console.log(age);

const name = "john";

console.log(`${name} age is ${age}`);
console.log(typeof name);
console.log(typeof age);
console.log(name.length);

console.log(name.split(""));

const fruits = ["apples", "banana", "oranges"];
console.log(fruits);

const object = {
  name: "John",
  age: 30,
  address: {
    street: "221B Baker Street",
    city: "London",
    country: "England",
  },
};
console.log(object.address.country);

const x = 11;
const color = x > 10 ? "red" : "blue";
console.log(color);
