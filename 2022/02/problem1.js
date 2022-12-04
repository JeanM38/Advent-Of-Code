const fs = require('fs');
const fileContent = fs.readFileSync('./input.txt', 'utf-8');

const shapeScore = {
    /* Rock */
    "X": {
        "base": 1,
        "target": "C", /* Enemy scissors */
        "enemy": "B" /* Enemy paper */
    },
    /* Paper */
    "Y": {
        "base": 2,
        "target": "A", /* Enemy rock */
        "enemy": "C"
    },
    /* Scissors */
    "Z": {
        "base": 3,
        "target": "B",
        "enemy": "A"
    }
};

let score = 0;

fileContent.split(/\r?\n/).forEach(line =>  {
    const enemyThrow = line.substring(0, 1);
    const ownThrow = line.substring(2, 3);

    /* Loss... */
    if (shapeScore[ownThrow].enemy == enemyThrow) {
        score += shapeScore[ownThrow].base;
    /* Win ! */
    } else if (shapeScore[ownThrow].target == enemyThrow) {
        score += shapeScore[ownThrow].base + 6;
    /* Equality */
    } else {
        score += shapeScore[ownThrow].base + 3;
    }
});

console.log(score);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);