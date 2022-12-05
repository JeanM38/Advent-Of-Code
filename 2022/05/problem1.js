const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');
const lines = fileContent.split(/\r?\n/);
const linesLength = lines[0].length;

let stacks = [];

for (let i = 0; i <= lines.length; ++i) {
    let stack = [];

    /* Every crate id is uppercase, by column, save it in an array */
    for (let j = 0; j <= linesLength; ++j) {
        if (lines[j] != undefined && /^[A-Z]+$/.test(lines[j][i]) ) {
            stack = [...stack, lines[j][i]];
        }
    }
    /* if column get 1 crate min. */
    if (stack.length) {
        stacks = [...stacks, stack];
    }
}

for (let i = 0; i < lines.length; ++i) {
    /* Get only instructions */
    if (/^[a-z]+$/.test(lines[i][0]) && lines[i] !== '') {
        const guidelineDirty = lines[i].split(' ');
        
        /* Create guideline object from instructions */
        const guideline = { 
            "amount": parseInt(guidelineDirty[1]),
            "from": parseInt(guidelineDirty[3]) -1, /* -1 Align to JS Array start index of 0 */
            "to": parseInt(guidelineDirty[5]) - 1,
        }

        /* Reassort stacks depends on guideline */
        for (let j = 0; j < guideline.amount; ++j) {
            stacks[guideline.to].unshift(stacks[guideline.from][0]);
            stacks[guideline.from].shift();
        }
    }
}

/* Get head of each stack */
const topOfEach = stacks.map(st => st[0]).join('');

console.log(topOfEach);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);