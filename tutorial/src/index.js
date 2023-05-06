import displayHelloWorld from "./helloworld";
import getClasses from "./getClasses";
import addimages from "./addingimages";
import Examplebutton from "./Component/Examplebutton";

displayHelloWorld();
/* getClasses(); */
addimages();
const examplebutton = new Examplebutton();
examplebutton.render();

const multiply = (a, b, c) => {
  let d = a * b * c;
  console.log(`Multiplication of ${a} ,${b} and ${c} is ${d}`);
};
multiply(1, 2, 3);
/* const obj = { a: "alpha", b: "bravo" };
const newobj = { ...obj, c: "charlie" };
console.log(newobj);
console.log(["a", "b", "c"].includes("b")); */
