function getpizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = "🍕";
            resolve(pizza);
        }, 2000);
    }).then((pizza) => {
        console.log(`Here is your pizza: ${pizza}`);
    }).catch((reject) => {
        console.error(`Error: ${error}`);
    }).finally(() => {
        console.log("Thank you for your order!");
    });
}
getpizza();