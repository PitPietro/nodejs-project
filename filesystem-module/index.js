const fs = require('fs');
let folderName = 'test_folder';
const testFilePath = './'+ folderName +'/test.txt';

/**
 * read from a file
 */
// fs.readFile('./cinque-maggio.txt', (err, data) => {
//     if (err) {
//         console.log('ERROR: ', err)
//     } else {
//         console.log(data.toString())
//     }
// })

/**
 * write to file
 */
// fs.writeFile(testFilePath, 'I am writing into a file', (err) => {
//     if (err) {
//         console.log('ERROR: ', err)
//     } else {
//         console.log('The file has been created')
//     }
// })

/**
 * append to file
 */
// fs.appendFile(testFilePath, '\r\nI am appending to a file', (err) => {
//     if (err) {
//         console.log('ERROR: ', err)
//     } else {
//         console.log('The text has been appended')
//     }
// })

/**
 * delete a file
 */
// if the file does already exists, then delete it
if (fs.existsSync(testFilePath)) {
    fs.unlink(testFilePath, (err) => {
        if (err) {
            console.log('ERROR: ', err)
        } else {
            console.log('The file has been deleted')
        }
    })
} else {
    console.log('The file already deleted')
}

/**
 * create a directory
 */
// if the folder does not already exists, then create it
// if (!fs.existsSync(folderName)) {
//     fs.mkdir(folderName, (err) => {
//         if (err) {
//             console.log('ERROR: ', err)
//         } else {
//             console.log('The folder has been created')
//         }
//     })
// } else {
//     console.log('The folder already created')
// }


/**
 * delete a directory
 */
// if the folder does already exists, then delete it
// if (fs.existsSync(folderName)) {
//     fs.rmdir(folderName, (err) => {
//         if (err) {
//             console.log('ERROR: ', err)
//         } else {
//             console.log('The folder has been deleted')
//         }
//     })
// } else {
//     console.log('The folder already deleted')
// }
