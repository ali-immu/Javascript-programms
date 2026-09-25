function factorial(n) {
    // 1. Check if input is a valid number type and not NaN
    if (typeof n !== 'number' || Number.isNaN(n)) {
        return console.log("Error: Input must be a valid number.");
    }

    // 2. Check if input is a negative number
    if (n < 0) {
        return console.log("Error: Factorial is not defined for negative numbers.");
    }

    // 3. Check if input is a decimal (non-integer)
    if (!Number.isInteger(n)) {
        return console.log("Error: Factorial is only defined for integers.");
    }

    // 4. Base cases: 0! = 1 and 1! = 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // 5. Calculate factorial for positive integers
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    // 6. Check for number overflow (JavaScript numbers overflow past 170!)
    if (!Number.isFinite(result)) {
        return "Error: Result is too large (Number overflow).";
    }

    return console.log(result);
}
factorial(5);
factorial("ali")
factorial(-5);

