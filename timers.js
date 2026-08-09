let func = function add(a,b=0) {
    return a + b;
}

setTimeout(() => {
    console.log(func(5,15));
}, 0);

setInterval(() => {
    console.log(func(5,15));
}, 3000);
const intervalId = setInterval(() => {
    console.log(func(5,5));
}, 0);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared");
}, 15000);