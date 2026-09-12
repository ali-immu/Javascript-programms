function findnissing(){
let arr = [1,2,3,4,-1,-2,-3,-4,-6,-7,-8,-9,-10];
let arr2 = [4,5,6,7,8,9,10];
let positive = [];
let negative = [];
for(let i=0;i<arr.length;i++) {
    if(arr[i] < 0) {
        negative.push(arr[i]);
    } else {
        positive.push(arr[i]);
    }
}
const negativeCount = arr.filter(num => num <0); // Second way to find negative numbers in array
console.log(`positive : ${positive}`);
console.log(`negative : ${negative}`);
console.log(`negative count : ${negativeCount.length} and negative numbers are : ${negativeCount}`);
const hasNegative = arr2.some(number => number < 0);

console.log(hasNegative); // true
}
findnissing();