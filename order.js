function order(words) {
    let arr = words.split(" ");
    console.log(arr);
    length = arr.length;
    newarr = [];
    for (i = 0; i < length; i++) {
        let str = arr[i];
        for (j = 0; j < str.length; j++) {
            let num = Math.floor(str[j]);

            num1 = num.toString();
            if (num1 != "NaN") {
                newarr[num - 1] = arr[i];
            }
        }
    }

    return newarr.join(" ");
}
console.log(order("is2 Thi1s T4est 3a")); 