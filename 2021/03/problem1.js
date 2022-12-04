const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');
let lines = fileContent.split(/\r?\n/);

/* Get line length */
let linesLength = lines[0].length;

let zeroOccurences = 0;
let oneOccurences = 0;
let gammaRate = epsilonRate = '';

for (let i = 0; i < linesLength; ++i) {
    for(let j = 0; j < lines.length; ++j) {
        /* Save zero and one occurences by column (multidimensionnal loop) */
        lines[j][i] === '0' ? ++zeroOccurences : ++oneOccurences;
    }

    /* update gammaRate and epsilonRate depends on 0/1 occurences */
    zeroOccurences > oneOccurences ? (gammaRate += '0', epsilonRate += '1') : (gammaRate += '1', epsilonRate += '0');

    zeroOccurences = 0;
    oneOccurences = 0;
}

/* Calculate the consumptionPower (gammeRate * epsilonRate) in decimals */
let consumptionPower = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2); 

console.log(consumptionPower);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);