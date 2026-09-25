function map() {
const map = new Map();
map.set("fname","Imran");
map.set("lname","Ali");
map.set("age",36);
const lnamemaujood = map.has("lname");
console.log(map);
console.log(lnamemaujood);
let size = map.size;
console.log(size);
let entry = map.entries();
console.log(entry);
let fname = map.get("fname");
console.log(fname);
let keys = map.keys();
console.log("keys",keys);
// Values only
for (const value of map.values()) {
    console.log(value);
}

// Keys only
for (const key of map.keys()) {
    console.log(key);
}

// Convert entries to an array
[...map].forEach(([key, value]) => {
    console.log(key, value);
});

}
map();