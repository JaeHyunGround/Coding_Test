// 백준 2480

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number);

let dice = new Set(input); // 중복 제거를 위해 set 객체로 만들어 준 후
let dice_arr = [...dice]; // 스프레드를 통해 다시 배열로 만든다

// 중복되는 주사위가 없을 때
if(dice_arr.length == 3) {
    let max_dice = dice_arr.reduce((a, b) => Math.max(a, b));
    console.log(max_dice * 100)
}
// 중복되는 주사위가 2개 일 때 
// 355 535 553
else if (dice_arr.length == 2) {
    if (input[0] == input[1]) console.log(1000 + input[0] * 100);
    if (input[0] == input[2]) console.log(1000 + input[0] * 100);
    if (input[1] == input[2]) console.log(1000 + input[1] * 100);
}
// 중복되는 주사위가 3개일 때 
else {
    console.log(10000 + (dice_arr[0] * 1000))
}