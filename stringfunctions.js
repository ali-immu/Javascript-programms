function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

function string() {
    let name = "Imran ali";
    console.log(name.toUpperCase());
    console.log(name.toLowerCase());
    console.log(name.length);
    console.log(name.charAt(0));
    console.log(name.indexOf("ali"));
    console.log(name.slice(0, 5));
    console.log(name.replace("ali", "khan"));
    console.log("Reversed string:", reverseString(name));
}

string();