function solution(str){
    let arr = str.split("");
    let newarr = []
    for (i = 0; i < arr.length / 2; i++) {
        if (arr[i + i + 1] != undefined) {
            newarr[i] = arr[i + i] + arr[i + i + 1];
        }
        else {
            newarr[i] = arr[i + i];
        }
        if (newarr[i].length != 2) {
            newarr[i] = newarr[i] + "_"
        }
    }
    return newarr;
}
console.log(solution("abcdefg"))