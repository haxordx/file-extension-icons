let fs = require('fs');
let files = fs.readdirSync('file-types');
fs.writeFileSync('file-types.json', JSON.stringify(files));