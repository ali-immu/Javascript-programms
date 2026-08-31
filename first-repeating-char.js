function firstRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return `The first repeating character is ${str[i]}`;
      }
    }
  }
  return "No repeating character";
}

console.log(firstRepeatingChar("Hello"));
console.log(firstRepeatingChar("Imran Ali"));