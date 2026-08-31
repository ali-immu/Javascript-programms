function symbol() {
    let name = Symbol("name");
    let lname = Symbol.for("lname");
    let age = Symbol("age");
    let person = {
        [name]: "John",
        [lname]: "Doe",
        [age]: 30
    };
    let status = {
        open: "open",
        closed: "closed"
    };
    console.log(person[name]);
    console.log(person[lname]);
    console.log(person[age]);
    console.log(status.open);
    console.log(status.closed);
}
symbol();