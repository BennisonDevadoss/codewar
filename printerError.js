function printerError(s) {
    // your code
    let count = 0;
    let a = s.split("");
    let b = a.filter((c) => (c.charCodeAt() > "m".charCodeAt()) );
    return b.length + "/" + a.length; 
}
console.log(printerError("abcdefnopq")); 