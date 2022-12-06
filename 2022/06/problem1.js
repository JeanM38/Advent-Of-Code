const fs = require('fs');

const line = fs.readFileSync('./input.txt', 'utf-8');

for (let i = 3; i < line.length; ++i) {
    const threePreviousChars = [line[i - 3], line[i -2], line[i - 1], line[i]];
    const threePreviousCharsDuplicates = threePreviousChars.filter((e, i, a) => a.indexOf(e) !== i);
    
    if (!threePreviousCharsDuplicates.length) {
        console.log(i + 1);
        break;
    }
}

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);