function forin() {
    const arr = [10, 20, 30, 40, 50];
    const obj = {
        a: 1,
        b: 2,
        c: 3,
        d:4
    };
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key: ${key}, Value: ${obj[key]}`);
        }
        if(obj[key] === 30) break;
    }
    for (const index in arr) {
        console.log(`Index: ${index}, Value: ${arr[index]}`);
        if(arr[index] === 3) break;
}
}
forin();