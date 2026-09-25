function nullish() {
    value1 ?? value2;
    const result = value1;
if(result === null || result === undefined) {
   result = value2;
   console.log(result);
   
}
}
nullish();