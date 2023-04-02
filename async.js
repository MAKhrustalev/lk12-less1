console.log("Async");
/* "Call back Hell"
tom1 (cb =>{
    tom2 (cb =>{
        tom3 (cb =>{
            tom4 (cb =>{
                "Lucky me!"
            })
        })
    })
})
*/
/* "Promise" */
/* 
Мама готовит ужин и попросила дочь порезать хлеб. 
Также мама попросила сына купить хлеб.

Брат пошел за хлебом.
Вариант 1. Брат отвлекся на футбол и не дошел до магазина.
Вариат 2. Брат забыл деньги.
В этот момент сестра стоит с ножом и ждет возвращения брата у двери.
!Сестра может зпнятся чем-то еще в ожидании брата!
Брат приносит хлеб.
Вариант 1. Нож затупился.
Сестра режет хлеб к ужину.
*/
let promise1 = new Promise(function (resolve, reject) {
  // resolve - успех (обещание выполнено);
  // rreject - неудача (обещание не выполнено)
  // setTimeout(function() {
  let n = Math.random(); // 0.000000001-0.999999999
  if (n > 0.5) {
    resolve("Хлеб куплен");
  } else {
    reject("Хлеба не куплен");
  }
  // }, 5000)
});

let promise2 = new Promise(function (resolve, reject) {
  let n = Math.random();
  if (n > 0.3) {
    resolve("Хлеб нарезан");
  } else {
    reject("Что-то пошло не так");
  }
});
// console.log(promise);
promise1
  .then((bread) => {
    console.log(bread);
    return promise2;
  })
  .then((dinner) => {
    console.log(dinner);
  })
  .catch((error) => {
    console.log(error);
  });

//   .then()
//   .then();
