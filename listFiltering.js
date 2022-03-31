function filter_list(l) {
    // Return a new array with the strings filtered out
    let b = l.filter((a) => typeof a === "number");
    return b;
}
console.log(filter_list([1, 2, 3, "w"]));