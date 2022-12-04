const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');

let increased = 0;
let lines = fileContent.split(/\r?\n/);

for (let i = 1; i < lines.length; ++i) {
    /* If current line is superior than previous line */
    lines[i] > lines[i - 1] ? ++increased : increased;
}

console.log(increased);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);