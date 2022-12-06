const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');

let increased = 0;
let lines = fileContent.split(/\r?\n/);

for (let i = 3; i < lines.length; ++i) {
	const firstThree = parseInt(lines[i-3]) + parseInt(lines[i-2]) + parseInt(lines[i-1]);
	const secondThree = parseInt(lines[i-2]) + parseInt(lines[i-1]) + parseInt(lines[i]);
    
	if(firstThree < secondThree) {
        ++increased;
    }
}

console.log(increased);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);