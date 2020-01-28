const path = require('path');
const dirExists = require('directory-exists');
const chalk = require('chalk');
module.exports = (dir) => {
    // Write your code here

  
    dir =path.join(dir,'/.git')
    dirExists(dir,(error, result)=>{
        if (result == true){
            console.log(chalk.blue(' Eingabe ist existierender Ordner '))
        } else{
            console.log(chalk.red(' Eingabe ist kein existierender Ordner '))
        }
         console.log(path.resolve(dir))
    })
};
