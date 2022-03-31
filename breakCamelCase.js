// BreakupcamelCasting
function solution(string) {
    let arr = string.split("")
    let newarr = [];
    arr.forEach(element => {
        if (element.charCodeAt() < "a".charCodeAt()) {
            let space = " ";
            newarr.push(space);
        }
        newarr.push(element);
    });
    return newarr.join("");
}
console.log(solution("camelCasting")); 