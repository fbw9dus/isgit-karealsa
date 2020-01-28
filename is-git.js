const path = require('path');
const dirExists = require('directory-exists');



module.exports = (dir) => {
    const b = process.argv[2]


     dir = path.join(b,'/.git')
    // Write your code here
    dirExists(dir, (error, result) => {

        if(result == true){
            console.log('Das ist ein Git Ordner')
        } else {
            console.log('Ken git Ordner')
        }
        console.log(result); // result is a boolean
      });
}







