function promise() {
    const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved');
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved');
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved');
    resolve(30);
  }, 6 * 1000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved');
    reject(30);
  }, 4 * 1000);
});

Promise.all([p1, p2, p3,p4]).then((results) => {
  const total = results.reduce((p, c) => p + c, 0);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
}).catch((error) => {
  console.log(`A promise was rejected with: ${error}`);
});
}
promise()