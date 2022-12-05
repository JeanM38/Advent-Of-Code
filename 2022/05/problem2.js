const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');
// const lines = fileContent.split(/\r?\n/); => Not always usefull

fileContent.split(/\r?\n/).forEach(line =>  {
    /* Algo comes here */
});

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);