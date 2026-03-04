/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/
// user input, declare variables as arguments in cli
let dogName = process.argv[2]
let humanAge = Number(process.argv[3])

// js output depending on user input
let dogAge;

// if condition to check dogAge
    if (humanAge === 1) {
        dogAge = 15
    } else if (humanAge === 2) {
        dogAge = 15 + 9
    } else if (humanAge > 2) {
        dogAge = 24 + 5 * (humanAge - 2)
    }


console.log(`Your dog, ${dogName}, is ${dogAge} years old,
but that's ${humanAge} years old in dog years!`);