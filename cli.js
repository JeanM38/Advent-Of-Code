#!/usr/bin/env node
const fs = require('fs');

const [,, ...args] = process.argv;

const year = args[0];
const day = args[1];

if (parseInt(year) && parseInt(day)) {
    const folderName = `./${year}/${day}`;

    /* Every template folder files to copy */
    const filesToCopy = [
        'README.md',
        'input.txt',
        'problem1.js',
        'problem2.js',
    ]
    
    try {
        /* Check if folder already exists recursively */
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName, { 
                recursive: true 
            });
            /* Copy each template files */
            filesToCopy.forEach(file => {
                fs.copyFile(`./template/${file}`, `${folderName}/${file}`, (err) => {
                    if (err) {
                        console.log('Error Found:', err);
                      }
                      else {
                        console.log(file, ' append to ', folderName);
                      }
                });
            });
            /* Update link to solution with year and date args */
            fs.readFile(`./${folderName}/${filesToCopy[0]}`, 'utf8', (err,data) => {
                if (err) {
                  return console.log(err);
                }
                let reworkedDay = day[0] == '0' ? day[1] : day;
                let replacments = [year, reworkedDay];

                let result = data.replace(/%(\d+)/g, (_, n) => replacments[+n-1]);
              
                fs.writeFile(`./${folderName}/${filesToCopy[0]}`, result, 'utf8', (err) => {
                    if (err) {
                       console.log('Error Found:', err)
                    };
                });
            });              
        } else {
            console.log('This folder already exists !');
        }
    } catch (err) {
        console.error('Error Found:', err);
    }
}

/* Calculate and log memory used during process */
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`\n\nThe script uses approximately ${Math.round(used * 100) / 100} MB`);