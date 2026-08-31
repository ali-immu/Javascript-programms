for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
console.log("-----------------------------------------------");
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
console.log("-----------------------------------------------");
// for (const i = 0; i < 5; i++) { // here we will get TypeError : Assignment to constant variable
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
