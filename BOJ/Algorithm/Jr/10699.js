// 입력이 없는 문제

// 내가 푼 버전 (중간에 console.log 써버려서 틀렸다 처리 됐었다. 그래서 구글링을..)
const date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let realMonth = month + 1;
if (realMonth < 10) {
    realMonth = "0" + realMonth
}
const day = date.getDate();

console.log(year + "-" + realMonth + "-" + day);

// 구글링
const date2 = new Date().toISOString().split("T");
console.log(date2[0]);