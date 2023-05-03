// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function si(p, n, r) {
    return (p * n * r) / 100;
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let [p, n, r] = userInput[0].split(' ').map((item) => parseInt(item));

    // let p = array[0];
    // let n = array[1];
    // let r = array[2];

    console.log(si(p, n, r));

  //end-here
});