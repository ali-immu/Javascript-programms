function findmissingnumber(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const numberSet = new Set(arr);
    console.log(numberSet);
    
    const missing = [];
    for(let i=min;i<=max;i++) {
        if(!numberSet.has(i)) {
            missing.push(i);
        }
    }
    // console.log(missing);
    return console.log(missing);
}
findmissingnumber([1,2,5,6,7,8,10,12, 12,1,2]);