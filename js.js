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
