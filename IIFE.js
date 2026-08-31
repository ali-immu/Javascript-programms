(function() {
    let message = "Hello, World!";
    var a = 6;
    const b = 7;
    console.log(message); // Immediate output: Hello, World!
})();
// console.log(message); // ReferenceError: message is not defineds
// console.log(a); // ReferenceError: a is not defined
// console.log("B",b); // ReferenceError: b is not defined


function check() {
var a = 1;
console.log(a);
}
// console.log(a);
check();