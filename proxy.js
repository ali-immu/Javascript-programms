function proxy() {
    const user = {
    firstName: 'imran',
    lastName: 'ali',
    email: 'i.ali@outlook.com',
}
const handler = {
    get(target, property) {
        console.log(`Property ${property} has been read.`);
        return target[property];
    }
}
const proxyUser = new Proxy(user, handler);
console.log("proxyuser", proxyUser.email);

}
proxy()