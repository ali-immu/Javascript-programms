function firstRepeatingChar(str) {
  const seen = new Set();

  for (const ch of str) {
    if (seen.has(ch)) {
      return `The first repeating character is ${ch}`;
    }
    seen.add(ch);
  }

  return "No repeating character";
}

console.log(firstRepeatingChar("Hello"));      // l
console.log(firstRepeatingChar("Imran Ali"));  // No repeating character