const path = require('path')

console.log("SEP: ",path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log("FILE_PATH: ",filePath)

const base = path.basename(filePath)
console.log("BASE: ",base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log("RESOLVE: ",absolute);
