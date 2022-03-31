function findNextSquare(sq) {

    let a = Math.sqrt(sq);
    // let boolean = /[\.]/.test(String(a));
    if (a % 1 === 0) {
        b = a + 1;
        return b * b
    }
    // Return the next square if sq is a perfect square, -1 otherwise
    return -1;
}

console.log(findNextSquare(121));