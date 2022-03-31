/* https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript */
//Find Unique Number

function findUniq(arr) {
    // do magic
    const newArr = [];
    const length = arr.length;
    for (i = 0; i < length; i++) {
        let flag = 1;
        for (j = 0; j < length; j++) {

            if (i === j) {
                continue;
            }
            if (arr[i] === arr[j]) {
                flag = 0;
                break;
            }
        }
        if (flag === 1) {
            newArr.push(arr[i])
        }
    }
    /* codewar needs the output as a string */
    return Number(newArr);  /* if the array have morethan one index, here the number constructor converts the array to an NaN (Not a Number) */
}
console.log(findUniq([1, 2, 2, 3, 4, 7, 5, 1]));    // codewar needs the output as a number.
console.log(findUniq([1, 0, 0]))
// Nice job Bennison Devadoss J 