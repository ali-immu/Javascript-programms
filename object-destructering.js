function objdes() {
    const array = [1, 2, 3, 4, 5];
    const [a,b,c,...d] = array;
    const person = {
        name: 'John Doe',
        age: 30,
        address: {
            street: '123 Main St',
            gaun : {
                gaunname: 'Gaan Name',
                add: 'Gaun address'
            },
            city: 'Anytown',
            country: 'USA'
        }
    }
    const { name, age, address: { street, city, country, gaun : {gaunname, add} } } = person;
    console.log(name, age, street, city, country, gaunname, add);
    console.log(a,b,c,d);
}
objdes();