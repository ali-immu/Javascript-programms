function largest() {
    let arr = [1, 2, 3, 4, 6, 77, 77, 1, 0, -1];
    let largest = arr[0]; //assume first number is largest
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) { // if you want to find smallest number then change it to largest > arr[i]
            largest = arr[i];
        }
    }
    console.log(largest);
}
largest();
