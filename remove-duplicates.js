function removeduplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
console.log(removeduplicates([1, 2, 3, 4, 6, 77, 77, 1, 0, -1]).sort((a,b) => a - b));