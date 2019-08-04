"use strict";
let arr = [1,2,3,4,5,6,7,8,9,10];

let divideTwo = arr.filter( (one) => one % 2 === 0);
let x1000 = divideTwo.map((x) => x * 1000)

async function getText(){
    return '1234'
}
console.log(arr);
console.log(x1000);
console.log(getText());