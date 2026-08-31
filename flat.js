function flat() {
    const arr = [1, 2, [3,[4,89,5], 4], [5, 6]];
    console.log('Original Array:', arr);
    const flattenedArr = arr.flat(Infinity);
    console.log('Flattened Array:', flattenedArr);
}
flat();