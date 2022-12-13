const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');
const lines = fileContent.split(/\r?\n/);

/* First line is used as a reference for horizontal length */
const gridLength = lines[0].length;
let highestScenicScore = [];

/**
 * 
 * @param {Array<string>} array 
 * @param {number} min starting point
 * @returns {number} increment value
 */
const getIncrementScore = (array, min) => {
    for (let i = 0; i < array.length; ++i) {
        if (array[i] >= min) {
            return i + 1;
        }
    }

    return array.length;
}

for (let y = 0; y < lines.length; ++y) {
    for (let x = 0; x < gridLength; ++x) {
        /* Horizontal line */
        let yLine = lines[y].split('');

        /* Vertical line */
        let xLine = [];
        lines.forEach(line => { xLine = [...xLine, line[x]] });
        
        /* Put a marker for the current tree on x and y lines */
        yLine[x] = xLine[y] = 'X';
        
        /* Vertical views */
        let treeToTop = getIncrementScore(xLine.slice(0, y).reverse(), parseInt(lines[y][x]));
        let treeToBot = getIncrementScore(xLine.slice(y + 1, xLine.length), parseInt(lines[y][x]));

        /* Horizontal views */
        let treeToLeft = getIncrementScore(yLine.slice(0, x).reverse(), parseInt(lines[y][x]));
        let treeToRight = getIncrementScore(yLine.slice(x + 1, yLine.length), parseInt(lines[y][x]));

        highestScenicScore = [
            ...highestScenicScore, 
            treeToTop * treeToLeft * treeToBot * treeToRight
        ];
    }
}

console.log(Math.max(...highestScenicScore));

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);