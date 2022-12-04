const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');

let fullyContains = 0;

/**
 * 
 * @param {number} start from
 * @param {number} end to
 * @param {number} [length=start+end] length
 * @returns {Array<number>} from start to end
 */
const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

fileContent.split(/\r?\n/).forEach(line =>  {
    /* Left and right elves assignments  */
    const bothAssignments = line.split(',');

    /* Elves assignments - start & end */
    const elveOneAssignments = bothAssignments[0].split('-');
    const elveTwoAssignments = bothAssignments[1].split('-');

    /* Elves assignments - array */
    const elveOneSections = range(parseInt(elveOneAssignments[0]), parseInt(elveOneAssignments[1]));
    const elveTwoSections = range(parseInt(elveTwoAssignments[0]), parseInt(elveTwoAssignments[1]));

    /* If elves sections overlapse themselves */
    if(elveOneSections.every(section => elveTwoSections.includes(section)) || elveTwoSections.every(section => elveOneSections.includes(section))) {
        ++fullyContains;
    }
});

console.log(fullyContains);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);