function showUppercaseSet() {
    const characters = new Set();
    characters.add("a");
    characters.add("b");
    characters.add("a");
    characters.add("c");
    characters.add("d");
    characters.add("d");
    // characters.clear();
    characters.entries();
    const hasValue = characters.has("z");
    let entry = characters.entries();
    console.log(`entry" , ${entry}`);
    
    console.log(characters.values());
    console.log(characters);
    console.log(hasValue);
}
showUppercaseSet();