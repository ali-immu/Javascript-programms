function foreach() {
    const array = [1, 2, 3, 4, 5, , , , , , , , 88, , , ,];
    const fruits = [{
        name : 'Apple',
        price : 100,
        description : 'This is a fruit'
    },
    {
        name : 'Banana',
        price : 50,
        description : 'This is another fruit'
    }
];
    array.forEach((value, index) => {
        console.log(`Index: ${index}, Value: ${value}`);
    });

    fruits.forEach((i, v) => {
        console.log(`Index: ${v}, Name: ${i.name}, Price: ${i.price}, Description: ${i.description}`);
    });
}
foreach();