function reversesentence(sentence) {
    const reversedSentence = sentence.split(' ').reverse().join(' ');
    const allreverse = sentence.split('').reverse().join('');
    console.log(`Reversed Sentence: ${reversedSentence}`);
    console.log(`All Characters Reversed: ${allreverse}`);
}
reversesentence("I am imran ali and he will face anykind of problems in his life");