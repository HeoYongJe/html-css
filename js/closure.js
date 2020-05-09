// let increaseBtn = document.querySelector('.increase');
// let countAdd = document.querySelector('.countAdd');

// let increase = (function(){
//     let counter = 0;
//     return function(){
//         return counter++;
//     };
// }());

// increaseBtn.onclick = function(){
//     countAdd.innerHTML = increase();
// };

// let decreaseBtn = document.querySelector('.decrease');
// let countOut = document.querySelector('.countOut');

// let decrease = (function(){
//     let counter = 0;
//     return function(){
//         return --counter;
//     };
// }());

// decreaseBtn.onclick = function(){
//     countOut.innerHTML = decrease();
// };

const $counter = document.querySelector('.counter');

const Counter = (function () {

  let num = 0;

  function Counter() {

  }

  Counter.prototype.increase = function () {
    $counter.textContent = ++num;
  };

  Counter.prototype.decrease = function () {
    if (num <= 0) return;
    $counter.textContent = --num;
  };

  return Counter;
}());

const counter = new Counter();

document.querySelector('.increase').onclick = counter.increase;
document.querySelector('.decrease').onclick = counter.decrease;
