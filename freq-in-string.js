function frequency() {
let stringinput = "Hello";
let freq = {};
for(const n of stringinput) {
    freq[n] = (freq[n] || 0) + 1;
}
return console.log(freq);
}
frequency();
