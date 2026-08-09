function numberFunctions() {
    let x = Number.EPSILON;
    let y = Number.MAX_SAFE_INTEGER;
    let z = Number.MIN_SAFE_INTEGER;
    let w = Number.MIN_VALUE;
    let v = Number.POSITIVE_INFINITY;
    // let u = "imran";
    var u = 123;

    if(isNaN(u)) {
        console.log("u is not a number");
    } else {
        console.log("u is a number");
    }

    console.log({ x, y, z, w, v });
}
numberFunctions();