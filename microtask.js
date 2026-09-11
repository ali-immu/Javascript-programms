console.log('1. Script start'); // Synchronous

setTimeout(() => {
  console.log('2. setTimeout (Macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Promise 1 (Microtask)');
}).then(() => {
  console.log('4. Promise 2 (Microtask)');
});

queueMicrotask(() => {
  console.log('5. queueMicrotask (Microtask)');
});

console.log('6. Script end'); // Synchronous

/* Notes
Why this order occurs:
1 and 6 run immediately as synchronous tasks on the Call Stack.

setTimeout registers its callback into the Macrotask Queue.

Promises and queueMicrotask register callbacks into the Microtask Queue.

Once the main script finishes, the engine drains the entire Microtask Queue (3, 4, 5).

Only after the Microtask Queue is empty does the Event Loop pick the first job from the Macrotask Queue (2). */