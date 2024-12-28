const { readFileSync, writeFileSync } = require('fs')
console.log('__________start__________')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// { flag: 'w' } write flag
// { flag: 'a' } append flag
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
)

const result =  readFileSync('./content/result-sync.txt', 'utf8');
console.log(result, new Date());
console.log('done with this task')
console.log('starting the next one')
