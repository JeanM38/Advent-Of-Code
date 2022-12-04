const fs = require('fs');

const fileContent = fs.readFileSync('./input.txt', 'utf-8');

let score = 0;

const shapeScore = [
    /* Rock */
    {
        "id": "A",
        "base": 1,
        "target": "C", /* Enemy scissors */
        "enemy": "B" /* Enemy paper */
    },
    /* Paper */
    {
        "id": "B",
        "base": 2,
        "target": "A", /* Enemy rock */
        "enemy": "C"
    },
    /* Scissors */
    {
        "id": "C",
        "base": 3,
        "target": "B",
        "enemy": "A"
    },
];

fileContent.split(/\r?\n/).forEach(line =>  {
    const enemyThrow = line.substring(0, 1);
    let expectedResult = line.substring(2, 3);
    let targetThrow;

    /* Loss expected */
    if (expectedResult == "X") {
        targetThrow = shapeScore.find(s => s.enemy === enemyThrow);
        score += targetThrow.base;
    /* Equality expected */
    } else if (expectedResult == "Y") {
        targetThrow = shapeScore.find(s => s.id === enemyThrow);
        score += targetThrow.base + 3;
    /* Win expected */
    } else if (expectedResult == "Z") {
        targetThrow = shapeScore.find(s => s.target === enemyThrow);
        score += targetThrow.base + 6;
    }
});

console.log(score);

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);