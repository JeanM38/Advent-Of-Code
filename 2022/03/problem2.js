const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');

let prioritiesSum = 0;
let elvesGroup = [];

fileContent.split(/\r?\n/).forEach((line, i) =>  {
    if (i % 3 === 2 && i != 0) {
        /* Add 3rd line to elves group */
        elvesGroup = elvesGroup.length ? [...elvesGroup, line] : [line]; 

        /* Get duplicates between three elves rucksacks */
        const priorities = new Set(
            elvesGroup[0]
                .split("")
                .map(char1 => elvesGroup[1].split("").find(char2 => char1 === char2))
                .map(char3 => elvesGroup[2].split("").find(char4 => char3 === char4))
                .filter(e => e !== undefined)
        )

        /* Increase prioritiesSum by alphabetical number equivalent of rucksack priority */
        priorities.forEach(char => {
            char.toLowerCase() === char ? prioritiesSum += char.charCodeAt(0) - 96 : prioritiesSum += char.toLowerCase().charCodeAt(0) - 70;
        })

        /* Clean group */
        elvesGroup = [];
    } else {
        /* Add 1st and 2nd line to elvesGroup */
        elvesGroup = elvesGroup.length ? [...elvesGroup, line] : [line]; 
    }
});

console.log(prioritiesSum);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);