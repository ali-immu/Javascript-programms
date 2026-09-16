function countElementsGreaterThanPreviousAverage(responseTimes) {
    // اگر Array خالی ہے یا صرف 1 ایلیمنٹ ہے تو آؤٹ پٹ 0 ہوگا
    if (!responseTimes || responseTimes.length <= 1) {
        return 0;
    }
    if (!Array.isArray(responseTimes) || responseTimes.length <= 1) {
    return 0;
}   

    let count = 0;
    let runningSum = responseTimes[0]; // پہلے ایلیمنٹ کا سم

    // انڈیکس 1 سے شروع کرتے ہوئے (پہلے ایلیمنٹ کو سکپ کر کے)
    for (let i = 1; i < responseTimes.length; i++) {
        const currentVal = responseTimes[i];
        
        // پچھلے تمام ایلیمنٹس کی اوسط (Average)
        const previousAverage = runningSum / i;

        // اگر موجودہ ویلیو پچھلی اوسط سے سٹرکٹلی بڑی (strictly greater) ہے
        if (currentVal > previousAverage) {
            count++;
        }

        // اگلے انڈیکس کے لیے مجموعے کو اپڈیٹ کریں
        runningSum += currentVal;
    }

    return count;
}

// ----------------------------------------------------
// Example Test Runs:
// ----------------------------------------------------
console.log(countElementsGreaterThanPreviousAverage([10]));
// Output: 0

console.log(countElementsGreaterThanPreviousAverage([5, 5, 5, 5]));
// Output: 0

console.log(countElementsGreaterThanPreviousAverage([10, 20, 30]));
// Output: 2

console.log(countElementsGreaterThanPreviousAverage([10, 5, 1]));
// Output: 0

console.log(countElementsGreaterThanPreviousAverage([10, 20, 10, 30]));
// Output: 2

console.log(countElementsGreaterThanPreviousAverage([100, 50, 75, 200]));
// Output: 1

console.log(countElementsGreaterThanPreviousAverage([-10, -5, -20, 0]));
// Output: 2

console.log(countElementsGreaterThanPreviousAverage([1, 2, 1, 2, 1]));
// Output: 2

console.log(countElementsGreaterThanPreviousAverage(null));
// Output: 0

console.log(countElementsGreaterThanPreviousAverage(undefined));
// Output: 0