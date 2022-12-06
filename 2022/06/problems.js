const fs = require('fs');

const line = fs.readFileSync('./input.txt', 'utf-8');

/**
 * 
 * @description analyze string until a section contains no duplicates
 * @param {string} data 
 * @param {number} sequenceLength 
 * @returns {number} first start-of-message marker
 */
const getSecretMsg = (data, sequenceLength) => {
    for (let i = sequenceLength; i < data.length; ++i) {
        const previousChars = data.slice(i-sequenceLength, i).split('');
        const previousCharsDuplicates = previousChars.filter((e, i, a) => a.indexOf(e) !== i);

        if (previousCharsDuplicates.length === 0) {
            return i;
        }
    }
}

const secretMsgPart1 = getSecretMsg(line, 4);
const secretMsgPart2 = getSecretMsg(line, 14);

console.log(secretMsgPart1);
console.log(secretMsgPart2);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);