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
const range = (start, end, length = parseInt(end) - parseInt(start) + 1) =>
  Array.from({ length }, (_, i) => parseInt(start) + i);

fileContent.split(/\r?\n/).forEach(line =>  {
    /* Left and right elves assignments  */
    const bothAssignments = line.split(',');

    /* Elves assignments */
    const elveOneAssignments = bothAssignments[0].split('-');
    const elveTwoAssignments = bothAssignments[1].split('-');

    /* Return duplicates of two assignments */
    const sections = [
        ...range(elveOneAssignments[0], elveOneAssignments[1]),
        ...range(elveTwoAssignments[0], elveTwoAssignments[1])
    ].filter((e, i, a) => a.indexOf(e) !== i);
    
    /* If duplicates */
    if (sections.length) {
        ++fullyContains;
    }
})

console.log(fullyContains);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);