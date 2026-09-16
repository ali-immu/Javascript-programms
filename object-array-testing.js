function obj() {
    console.log([] + []); // blank
    console.log({} + {}); // [object object] [object object]
    console.log([] + {}); // [object object]
    console.log(`Array subtraction : ${[] - []}`); // 0
    console.log(typeof([]));
    console.log(typeof({}));
    console.log(typeof(1));
    console.log(typeof(true));
    console.log(typeof("Imran"));
    console.log({} - {});
    
    
}
obj();