const fs = require('node:fs')

const stats = fs.statSync('./teoria')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
)