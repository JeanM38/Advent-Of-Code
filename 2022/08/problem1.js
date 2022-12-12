const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');
const lines = fileContent.split(/\r?\n/);

/* First line is used as a reference for horizontal length */
const gridLength = lines[0].length;

let visibleTrees = 0;

/**
 * 
 * @description Get an array with a marker inside and filter all elements inferior than [**max**]
 * @param {Array<number|string>} array
 * @param {number} max 
 * @returns {array} filtered
 */
const removeInferiorElements = (array, max) => {
    return array.filter(item => parseInt(item) >= max || item == 'X');
}

for (let y = 0; y < lines.length; ++y) {
    for (let x = 0; x < gridLength; ++x) {
        /* If the tree is on an edge, it's visible */
        if (y === 0 || y === lines.length - 1 || x === 0 || x === gridLength - 1) {
            ++visibleTrees;
        } else {
            /* Horizontal line */
            let yLine = lines[y].split('');

            /* Vertical line */
            let xLine = [];
            lines.forEach(line => { xLine = [...xLine, line[x]] });

            /* Put a marker for the current tree on x and y lines */
            yLine[x] = xLine[y] = 'X';

            /* Remove inferior elements around marker */
            let yLineFiltered = removeInferiorElements(yLine, lines[y][x]);
            let xLineFiltered = removeInferiorElements(xLine, lines[y][x]);

            if (
                xLineFiltered[0] === 'X' || xLineFiltered[xLineFiltered.length -1] == 'X' || 
                yLineFiltered[0] === 'X' || yLineFiltered[yLineFiltered.length -1] == 'X'
            ) {
                /* If marker 'X' is at the start of the end of the array, it's visible */
                ++visibleTrees;
            }
        }
    }
}

console.log(visibleTrees);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);