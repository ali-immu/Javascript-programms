function includes() {
    const arr = [1, 2, 3, 4, 5];
    const name = "Imran ali";
    console.log('Original Array:', arr);
    const isIncluded = arr.includes(3);
    const isNameIncluded = name.includes("Imran");
    console.log('Is "Imran" included in the name?', isNameIncluded);
    console.log('Is 3 included in the array?', isIncluded);
    const findIndex = arr.findIndex((num) => num === 3);
    console.log('Index of 3 using findIndex:', findIndex);
}
includes();