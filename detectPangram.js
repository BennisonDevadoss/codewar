/* https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript */

/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

function isPangram(string) {
    arr = string.split("");
    console.log(arr);
    console.log(arr.length);
    let a = 97;
    let b = 65;
    let count = 0;
    for (i = 1; i <= 26; i++) {
        if (arr.includes(String.fromCharCode(a)) || arr.includes(String.fromCharCode(b))) {
            count = count + 1;
            a = a + 1;
            b = b + 1;
        }
        else {
            return false;
        }
    }
    return true;

}
console.log(isPangram("Cwm fjord bank glyphs vext quiz")); 