const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');

let elveInventory = [];
let elvesInventories = [];

fileContent.split(/\r?\n/).forEach(line =>  {
    /* If line not a blank space, push in elveInventory, else push elveInventory in elvesInventories and empty it */
    line ? 
        elveInventory = [parseInt(line), ...elveInventory] : 
        (elvesInventories = [elveInventory, ...elvesInventories], elveInventory = [])
});

/* Reduce elvesInventories */
const elvesInventoriesReduced = [...elvesInventories.map(e => e.reduce((a, b) => a + b, 0))];

/* Descending sorting */
const elvesInventoriesSorted = elvesInventoriesReduced.sort((a, b) => {return b - a});

/* Calculate top three */
const elvesInventoriesTopThree = elvesInventoriesSorted[0] + elvesInventoriesSorted[1] + elvesInventoriesSorted[2];

console.log(elvesInventoriesTopThree);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);