// 1 История
// console.log("One");
// setTimeout(function () {
//   console.log("Two");
// }, 1000); //  задержка на 1 секунду
// setTimeout(function () {
//   console.log("Five");
// }, 0); //  задержка на 1 секунду
// console.log("Three");
// console.log("Fore");

// 2 История - Событийная петля (event loop)
let foo = function () {
  setTimeout(function name() {
    console.log("foo");
  }, 1000);
};

let bar = function () {
  setTimeout(function name() {
    console.log("bar");
  }, 1000);
  foo();
};

let baz = function () {
  setTimeout(function name() {
    console.log("baz");
  }, 1000);
  bar();
};

baz();
// foo();
// bar();
