const fs = require('fs')

const readStream = fs.createReadStream('large-file.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('writeStream.txt');
readStream.on('data', chunk => {
    console.log('# new chunk #')
    console.log(chunk)
    console.log('# end chunk #')

    writeStream.write('\n # new chunk #\n')
    writeStream.write(chunk)
    writeStream.write('\n # end chunk #\n')
})

// the short way
// readStream.pipe(writeStream)
