// Node.js => server-side JavaScript Runtime Environment

// const fs = require('fs/promises');
// const path = require('path');

// asynchronous way
// fs.stat('/Users/sathish/Desktop/b47-wd-tamil-dsa/nodejs/filesystem.js', (err, stats) => {
//     if(err){
//         console.error(err);
//         return;
//     }

//     // console.log(stats.isFile());
//     // console.log(stats.isDirectory());
//     // console.log(stats.isSymbolicLink());
//     console.log(stats.size);
// });

// blocking or synchronous
// async function test(){
//     try {
//         // windows: c:\users\sathish\desktop\b47-wd-tamil-dsa/nodejs/filesystem.js
//         const stats = await fs.stat('/Users/sathish/Desktop/b47-wd-tamil-dsa/nodejs/filesystem.js');
//         console.log(stats.isFile());
//     } catch (err){
//         console.error(err);
//     }
// }

// test();

// const test = '/Users/sathish/Desktop/b47-wd-tamil-dsa/nodejs/test.txt';

// console.log(path.dirname(test));
// console.log(path.basename(test));
// console.log(path.extname(test));
// console.log(path.basename(test, path.extname(test)));

// const fs = require('fs');
// const path = require('path');

// const folderPath = '/Users/sathish/Desktop/b47-wd-tamil-dsa/nodejs';

// fs.readdir(folderPath, (err, files) => {
//     if(err){
//         console.error(err);
//         return;
//     }

//     files.forEach(file => {
//         console.log(file, path.resolve(file));
//     });
// });

// read the contents of a file
// const fs = require('fs');

// fs.readFile('/Users/sathish/Desktop/b47-wd-tamil-dsa/nodejs/test.txt','utf-8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data.split('\n'));
// });

// write contents to a file
// const fs = require('fs');

// fs.writeFile('/Users/sathish/Desktop/b47-wd-tamil-dsa/nodejs/test.txt', '\nHello World!', {flag: 'a+'}, err => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     // file is written successfully
//     console.log('contents written to the file!');
// })

// create a new folder
const fs = require('fs');
const path = require('path');

const folderName = '/Users/sathish/Desktop/b47-wd-tamil-dsa/nodejs/testDir';

try {
    if(!fs.existsSync(folderName)){
        fs.mkdirSync(folderName);
    }
} catch(error){
    console.error(error);
}

const files = fs.readdirSync('/Users/sathish/Desktop/b47-wd-tamil-dsa/nodejs');

files.forEach(file => {
    const resolvedPath = path.resolve(path.join('nodejs', file));
    fs.stat(resolvedPath, (err, stats) => {
        if(err){
            console.error(err);
            return;
        }

        console.log(resolvedPath, stats.isFile());
    });
});