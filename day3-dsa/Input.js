// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

    // handle the input
    let size = parseInt(userInput[0]);

    let array = userInput[1].split(' ').map(item => parseInt(item));

    console.log(array.join('\n'));

    // for (let i = 0; i < userInput[1].length; i += 2){
    //     console.log(userInput[1].charAt(i));
    // }

    // your logic goes here


  //end-here
});