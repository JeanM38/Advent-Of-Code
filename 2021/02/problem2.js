const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');

let horizontalPos = 0;
let depthPos = 0;
let aim = 0;

fileContent.split(/\r?\n/).forEach(line =>  {
    const moveParams = line.split(" ");

    switch (moveParams[0]) {
        case "forward":
            horizontalPos += parseInt(moveParams[1]);
            depthPos += parseInt(moveParams[1]) * aim;
            break;
        case "down":
            aim += parseInt(moveParams[1]);
            break;
        case "up":
            aim -= parseInt(moveParams[1]);
            break;
        default:
            break;
    }
});

console.log(horizontalPos * depthPos);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);