const binaryArrayToNumber = arr => {
    let integer = 0;
    length = arr.length;
    for (i = 0; i < length; i++) {
        let last_index = arr.pop()
        if (last_index === 1) {
            integer += Math.pow(2, i);
        }
    }
    return integer;
};
binaryArrayToNumber([0, 0, 0, 1]); 