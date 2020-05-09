let increaseBtn = document.getElementById('increase');
let countAdd = document.getElementById('countAdd');

let increase = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    };
}());

increaseBtn.onclick = function(){
    countAdd.innerHTML = increase();
};

let decreaseBtn = document.getElementById('decrease');
let countOut = document.getElementById('countOut');

let decrease = (function(){
    let counter = 0;
    return function(){
        return --counter;
    };
}());

decreaseBtn.onclick = function(){
    countOut.innerHTML = decrease();
};