// this keyword in browser vs node
// node file is inside of node folder in the same folder ../node

// Normal FN will just return Windowss Object
// In Strict Mode Same Function will log undefined
// Arrow FN will return same Windows Object even in strict mode or not
// "use strict";
// function normalFn() {
//   console.log(this);
// }
// normalFn();

// const arrowFn = () =>{
//     console.log(this);
// }
// arrowFn();

// Event Loop and Call Stack
console.log("Start"); //Here It Comess in CallStack Pos 1

// 2nd pr ye Chalyega:
Promise.resolve().then(() => {
  console.log("Promise 1 Microtask 1");
}); // It Goes in MicroTask becauase of Promise that means Higher Priority

// 5th pr ye Chalyega
setTimeout(() => {
  console.log("MacroTasks 1: Because of SetTimout");
}, 0); // It Goes in MacroTask becauase of setTimout that means lesser than MicroTask's Priority

// 3rd pr ye Chalyega
Promise.resolve().then(() => {
  console.log("Promise 2 Microtask 2");
}); // It Goes in MicroTask becauase of Promise that means Higher Priority

// 6th pr ye Chalyega
setTimeout(() => {
  console.log("MacroTasks 2: Because of SetTimout");
}, 0); // It Goes in MacroTask becauase of setTimout that means lesser than MicroTask's Priority

// 4th pr ye Chalyega
Promise.resolve().then(() => {
  console.log("Promise 3 Microtask 3");
});
console.log("end"); //Here It Comess in CallStack Pos 2
