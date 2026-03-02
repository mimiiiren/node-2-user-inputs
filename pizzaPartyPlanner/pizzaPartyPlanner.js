/* 

Your task: Make a Node.js pizza party planner that calculates how many slices of pizza each guest gets, and how many slices are left over!

Follow the instructions in the README.md file in this folder.

*/
let name = process.argv[2]
let pizzaNumber = Number (process.argv[3])
let sliceNumber = Number (process.argv[4])
let guestNumber = Number (process.argv[5])

let totalSlices = pizzaNumber * sliceNumber
let guestSlice = Math.floor(totalSlices / guestNumber)
let remainder = totalSlices % guestNumber

console.log(`Hey ${name}! 🍕 You ordered ${pizzaNumber} pizzas with ${sliceNumber} slices each — that’s ${totalSlices} slices total! 
    Each of your ${guestNumber} guests gets ${guestSlice} slices, and you’ll have ${remainder} slices left over.`)