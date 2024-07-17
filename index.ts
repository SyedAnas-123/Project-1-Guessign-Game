#! /usr/bin/env node
import inquirer from "inquirer";

//1 : COMPUTER WILL GENERATE  A RANDOM NUMBER
//2 : USER INPUT FOR GUESSING NUMBER 
//3 : COMPARE USER INPUT WITH COMPUTER GEENRATED NUMBER AND SHOW RESULT 

//1 PART
//we want ke har bar computer new input de tw .
// const randomnumber = Math.random() ; // points me values de rha 
// const randomnumber = Math.floor(Math.random()) // floor round off kr dega  but isme 0 hi ahra ans tw
const randomnumber = Math.floor(Math.random() * 100 + 1  )
//console.log(randomnumber);

//PART 2
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message : "Please GUESS A NUMBER between 1 to 100 ",
     },

]);
console.log(answers);


//PART 3 
if (answers.userGuessNumber === randomnumber){
    console.log("CONGRATULATIONS YOU GUESSSED A RIGHT NUMBER ");
}
else{
    console.log("YOU GUESSES WRONG NUMBER ");
}


