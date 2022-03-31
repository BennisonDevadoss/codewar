function toWeirdCase(string) {
    let weirdCase = ""
    let weirdCase1 = [];
    str = string.split(" ");
    for (j = 0; j < str.length; j++) {
        newstr = str[j];
        for (i = 0; i < newstr.length; i++) {
            if ((i + 1) % 2 != 0) {
                weirdCase += newstr[i].toUpperCase()
                continue;
            }
            weirdCase += newstr[i];
        }
        weirdCase1[j] = weirdCase;
        weirdCase = "";
    }
    return weirdCase1.join(" ");
}
console.log(toWeirdCase("hello world")); 
