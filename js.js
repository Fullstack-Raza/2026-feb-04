// const h1 = document.querySelector("h1");
// let num = 0;
// let z = 0;
// for (let b = 1; z < 20; b++) {
//   let R = Math.floor(Math.random() * 100);
//   num = R;
//   if (num % 2 === 0) {
//     z++;
//     console.log(b, z, num);
//     h1.textContent= `${b} ${z} ${num}`
//   }
// }

const box = document.querySelector("#box");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  //   console.log(red, green, blue);
});

// task 1 multi-task loop

// let numbers = [2, 5, 8, 5, 3, 10, 2, 8, 11, 14];
// let unique = [];
// let even = [];
// let evenSum = 0;
// let totlSum = 0;
// let max = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   totlSum = totlSum + numbers[i];
//   if (max < numbers[i]) {
//     max = numbers[i];
//   }
//   if (!unique.includes(numbers[i])) {
//     unique.push(numbers[i]);
//   }
//   if (numbers[i] % 2 === 0) {
//     even.push(numbers[i]);
//     evenSum = evenSum + numbers[i];
//   }
// }
// console.log(unique);
// console.log(even);
// console.log(evenSum);
// console.log(totlSum);
// console.log(max);

// task 2
// let numbers = [2, 10, 5, 10, 3];
// let max = 0;
// let list=0;
// for (let i = 0; i < numbers.length; i++) {
//   if (max < numbers[i]) {
//    max = numbers[i]
//   }
//   if(max === numbers[i]){
//     list++
//   }
// }
//   console.log(max,list);

// task 3
let numbers = [3, 7, 2, 9, 5];
let max = numbers[0];
let secondMax = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    secondMax = max;
    max = numbers[i];
  } else if (numbers[i] > secondMax) {
    secondMax = numbers[i];
  }
}
console.log(max);
console.log(secondMax);
