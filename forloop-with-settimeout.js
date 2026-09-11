for (var i = 0; i < 5; i++) {
  setTimeout(() => { // output 5 5 5 5 5 
    console.log(i);
  }, 1000);
}
console.log("-----------------------------------------------");
for (let i = 0; i < 5; i++) {
  setTimeout(() => { // output 0 1 2 3 4
    console.log(i);
  }, 2000);
}
console.log("-----------------------------------------------");
// for (const i = 0; i < 5; i++) { // here we will get TypeError : Assignment to constant variable
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
