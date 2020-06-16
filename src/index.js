import { Observer } from "./core/observer";

let car = new Observer({
  brand: 'BMW',
  price: 3000,
  lists: [1, 2, 3],
  avatar: {
    name: "lear",
    age: 18
  }
});

console.log(car);