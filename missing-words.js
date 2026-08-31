function findMissingWords(sendString, receiveString) {
  const sendWords = sendString.split(' ');
  const receiveWords = receiveString.split(' ');
  const missingWords = [];

  for (let i = 0; i < sendWords.length; i++) {
    if (!receiveWords.includes(sendWords[i])) {
      missingWords.push(sendWords[i]);
    }
  }

  return missingWords;
}

const sendString = 'i am a programmer';
console.log(`Joining string : ${sendString.split('').reverse().join('')}`);
const receiveString = 'i programmer';

console.log(findMissingWords(sendString, receiveString));
