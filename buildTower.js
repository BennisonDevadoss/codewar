/* https://www.codewars.com/kata/576757b1df89ecf5bd00073b */

function towerBuilder(nFloors) {
    let pattern = "";
    let tower = [];
    let odd = 0;
    let copy = nFloors;
    for (let i = 0; i < nFloors; i++) {
        odd = 1 + i + i;
        if (i === nFloors - 1) {
            break;
        }
        // Add space to each building block. 
        for (j = 1; j < copy; j++) {
            pattern += " ";
            if (j === copy - 1) {
                for (k = 0; k < odd; k++) {
                    pattern = pattern + "*";
                }
                for (l = 0; l < copy - 1; l++) {
                    pattern += " ";
                }
            }
        }
        tower.push(pattern);
        pattern = "";
        copy--;
    }
    for (m = 0; m < odd; m++) {
        pattern = pattern + "*";
    }
    tower.push(pattern);
    return tower;
}
console.log(towerBuilder(10)); 