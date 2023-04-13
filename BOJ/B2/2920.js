const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let ascending = 0;
let descending = 0;

if (input[0] == 1) {
    for(var i = 1; i < input.length; i++) {
        if(input[i] == (Number(input[i - 1]) + 1)){
            ascending++;
        }
    }
} else if(input[0] == 8) {
    for(var i = 1; i < input.length; i++) {
        if(input[i] == (Number(input[i - 1]) - 1)){
            descending++;
        }
    }
}

if (ascending == 7) {
    console.log("ascending");
} else if (descending == 7) {
    console.log("descending");
} else {
    console.log("mixed");
}