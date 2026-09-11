/*
2. Memoization Concept
Memoization is an optimization technique used to speed up programs by caching (storing) the results of expensive function calls and returning the cached result when the same inputs occur again.

How It Works
When a memoized function is called with arguments, it checks its cache object.

If the result for those arguments is already in the cache, it returns the cached value immediately without re-executing the heavy computation.

If not in the cache, it executes the function, saves the result to the cache, and returns it.

Example
Pure Function Memoizer (Closure Pattern)
 */
function memoize(fn) {
  const cache = {}; // Private cache store using closures

  return function(...args) {
    // Create a unique key based on arguments passed
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log(`Fetching from cache for args: ${key}`);
      return cache[key];
    }

    console.log(`Calculating new result for args: ${key}`);
    const result = fn(...args);
    cache[key] = result; // Store in cache
    return result;
  };
}

// An expensive computation function
function expensiveSquare(n) {
  // Simulate heavy computation
  return n * n;
}

// Wrap with memoization
const memoizedSquare = memoize(expensiveSquare);

console.log(memoizedSquare(5)); // Calculating new result -> 25
console.log(memoizedSquare(5)); // Fetching from cache -> 25 (Instant)
console.log(memoizedSquare(10)); // Calculating new result -> 100

//real time use case: Fibonacci Sequence
const memoizedFibonacci = (function() {
  const cache = {};

  function fib(n) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];

    // Cache the calculated value
    return (cache[n] = fib(n - 1) + fib(n - 2));
  }

  return fib;
})();

console.log(memoizedFibonacci(40)); // 102334155 (Calculated instantaneously)
console.log(memoizedFibonacci(-1)); // 102334155 (Fetched from cache)

