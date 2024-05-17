#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.redBright(`
-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X
\t\t || Welcome To Wardah Number Guessing Game`));
const systemGeneratedNumber = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "Guess a number between 1 to 10 and write it: "
    }]);
const { userGuess } = answers;
console.log(chalk.blueBright.bgWhiteBright(`Guessed No: ${userGuess} , Correct Answer is: ${systemGeneratedNumber}`));
if (userGuess === systemGeneratedNumber) {
    console.log(chalk.redBright("Correct Answer! Congratulations You have Win"));
}
else {
    console.log(chalk.yellowBright("Wrong Answer! Better Luck Next Time"));
}
;
