const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');

let prioritiesSum = 0;

fileContent.split(/\r?\n/).forEach((line, i) =>  {
    /* Split rucksack in two compartments */
    const splitRucksack = [line.substring(0, line.length / 2), line.substring(line.length / 2, line.length)];

    /* Get duplicates between two compartments */
    const priorities = new Set(
        splitRucksack[0]
            .split("")
            .map(char1 => splitRucksack[1].split("").find(char2 => char1 === char2))
            .filter(e => e !== undefined)
    )

    /* Increase prioritiesSum by alphabetical number equivalent of rucksack priority */
    priorities.forEach(char => {
        char.toLowerCase() === char ? prioritiesSum += char.charCodeAt(0) - 96 : prioritiesSum += char.toLowerCase().charCodeAt(0) - 70;
    })
});

console.log(prioritiesSum);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);