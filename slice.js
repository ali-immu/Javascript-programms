function slice() {
    const arr = [1, 2, 3, 4, 5];
    console.log('Original Array:', arr);
    const slicedArr = arr.slice(2, 4);
    const endslices = arr.slice(2,-2);
    console.log("endslices",endslices);
    
    console.log('Sliced Array:', slicedArr);
}
slice();