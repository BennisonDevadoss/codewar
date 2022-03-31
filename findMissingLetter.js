function findMissingLetter(array) {
    newarr = "";
    let a;
    for (i = 0; i < array.length - 1; i++) {
        if (array[i + 1].charCodeAt() - array[i].charCodeAt() != 1) {
            a = array[i].charCodeAt() + 1;
            newarr += String.fromCharCode(a);

        }
    }
    return newarr;
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));