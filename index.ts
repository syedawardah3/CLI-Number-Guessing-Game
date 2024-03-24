#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number 

// 2) user input for guessing number

//3) compair user input with generated number and show result

const randomNumber=Math.floor(Math.random()* 10 + 1);

console.log("wellcome to my number guessing game")


// console.log(randomNumber)

const answer= await inquirer.prompt([
    {
        name:"userGuessNumber",
        type:"number",
        message:"please  guess a number between 1 to 6 ",
    },
]);

console.log(answer)

// if condition is true then will print if one console
if(answer.userGuessNumber === randomNumber){
console.log("congratulations! you guessed right number")

    // if condition is false then will print else one console
}else{
console.log("you guessed wrong number");
}

