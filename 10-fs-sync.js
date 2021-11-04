const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/resolt-sync.txt', `Here is the resolt:
     ${first} ,${second}`
     ,{flag: 'a'}
    );

    console.log('done with is task');
    console.log('starting a new task')