const path = require('path');
const dirExists = require('directory-exists');

const chalk = require('chalk');
 

console.log(chalk.bold.green('Result'),chalk.bold.red('here'))





module.exports = (dir) => {



     dir = path.join(dir,'/.git')
    // Write your code here
    dirExists(dir, (error, result) => {

        if(result == true){
            console.log(chalk.blue('Das ist ein Git Ordner'))
        } else {
            console.log(chalk.red('Kein git Ordner'))
        }
        console.log(chalk.underline.yellow(result)); // result is a boolean
      });
}







