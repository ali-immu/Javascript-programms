function splice() {
    const arr = [1, 2, 3, 4, 5];
    console.log('Original Array:', arr);
    arr.splice(2, 2);
    const addedelement = arr.splice(2,1,56);
    console.log('Array after splice:', arr);
    console.log("addedelement",addedelement);
    
}
splice();