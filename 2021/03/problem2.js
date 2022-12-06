const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');
let lines = fileContent.split(/\r?\n/);

/**
 * 
 * @description calculate the c02 scrubber rating
 * @param {number[]} data 
 * @param {('co2'|'oxygen')} type
 * @returns {string} co2 scrubber rating
 */
const getSpecificRating = (data, type) => {
    let co2lines = data;
    const linesLength = data[0].length;
    let oneOccurences = 0;
    let zeroOccurences = 0;
    let bitRating = 0;

    /* For each line */
    for (let i = 0; i < linesLength; ++i) {
        /* Continue if saved lines length > 1 */
        if (co2lines.length > 1) {
            for (let j = 0; j < co2lines.length; ++j) {
                /* Save zero and one occurences by column (multidimensionnal loop) */
                co2lines[j][i] === '0' ? ++zeroOccurences : ++oneOccurences;
            }
            
            /* Set bit rating depends on desired type
            */
            if (zeroOccurences > oneOccurences) {
                bitRating = type === 'co2' ? 1 : 0;
            } else if (oneOccurences >= zeroOccurences) {
                bitRating = type === 'co2' ? 0 : 1;
            }

            /* Remove lines begins with bit rating */
            co2lines = co2lines.filter(line => parseInt(line[i]) === bitRating);

            zeroOccurences = oneOccurences =  0;
        }
    }

    /* Return the remaining line to decimal value */
    return parseInt(co2lines, 2);
}

const co2ScrubberRating = getSpecificRating(lines, 'co2');
const oxygenGeneratorRating = getSpecificRating(lines, 'oxygen');

const lifeSupportRating = co2ScrubberRating * oxygenGeneratorRating;

console.log(lifeSupportRating);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);