function outerFunction(x) {
    var x = 10;let y = 20;
    return function innerFunction(y) {
        return x + y;
    };
}
innerFunction = outerFunction(5);
console.log(innerFunction);

console.log(innerFunction(15));

function timer() {
    let count = 0;

    increment = function() { 
        count++;
        console.log(count);
    }
    decrement = function() {
        count--;
        console.log(count);
    }
    reset = function() {
        count = 0;
        console.log(count);
    }
}
timer();
increment();
increment();
increment();
decrement();
reset();