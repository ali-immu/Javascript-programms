function add(a,b,c) { // Normal function
    return a+b+c;
}
console.log(add(1,2,3)); // 6

function curryadd(a) { // Currying function
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
console.log(curryadd(3)(2)(3)); // 6


const addCurried = a=> b => c => a + b +c;
console.log(addCurried(89)(2)(3)); // 6
/*Here is an explanation of Currying and Memoization in JavaScript, complete with concepts, practical examples, and common use cases.

1. Currying
Concept
Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of nesting functions, each taking one argument at a time.

Instead of calling fn(a, b, c), currying allows you to call fn(a)(b)(c).

How It Works
A curried function returns a new function for each argument until all required arguments are passed, at which point it returns the final result. 


Real-World Use Case: Reusable Configuration
Currying allows you to partially apply functions—creating specialized functions by locking in certain parameters ahead of time.

*/

// Discount calculator
const applyDiscount = discount => price => price - (price * discount);

// Pre-configure specific discount functions
const tenPercentOff = applyDiscount(0.10);
const twentyPercentOff = applyDiscount(0.20);

console.log(tenPercentOff(100)); // 90
console.log(twentyPercentOff(100)); // 80