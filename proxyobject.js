const user = {
  name: 'Imran ali',
  accnumber: '123456789012',
  aadharnumber: '987654321098',
  email: 'imran@example.com',
  city: 'Delhi'
};

function maskNumber(value) {
  if (!value) return '';
  const str = String(value);
  const lastFour = str.slice(-4);
  return 'XXXX' + lastFour;
}

const maskedUser = new Proxy(user, {
  get(target, property, receiver) {
    if (property === 'accnumber' || property === 'aadharnumber') {
      return maskNumber(target[property]);
    }
    return Reflect.get(target, property, receiver);
  },

  getOwnPropertyDescriptor(target, property) {
    if (property === 'accnumber' || property === 'aadharnumber') {
      return {
        configurable: true,
        enumerable: true,
        writable: true,
        value: maskNumber(target[property])
      };
    }
    return Object.getOwnPropertyDescriptor(target, property);
  }
});

console.log('Name:', maskedUser.name);
console.log('Account Number:', maskedUser.accnumber);
console.log('Aadhar Number:', maskedUser.aadharnumber);
console.log('Email:', maskedUser.email);
console.log('Full Object:', maskedUser);
