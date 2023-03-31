const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// split() : String 객체를 지정한 구분자를 이용하여 여러개의 문자열로 나눈 후 배열로 리턴
// 따라서 toString()을 사용하여 문자열로 만들어 준 후 split()로 구분자를 사용해 배열로 리턴

let case_num = 0; // 케이스가 몇 개인지 나타내는 변수

// length는 함수로 쓰는 것이 아니다 !
for (var i = 0; i < input.length; i++) {
    let check = input[i].toString().split(" "); // 입력 마지막 0 0 을 확인 하기 위한 배열 선언
    if(check[0] == 0 && check[1] == 0) { // 배열 안 요소가 문자열로 돼있어서 === 쓰면 안된다.
        case_num = i; // 케이스 갯수 도출
    }
}

for (var j = 0; j < case_num; j++) {
    let case_array = input[j].toString().split(" ")
    if(Number(case_array[0]) > Number(case_array[1])) { // Number로 숫자 변환을 해줘야 정답이더라. 숫자 계산, 비교 할 땐 Number로 형 변환을 해주자.
        console.log("Yes");
    } else {
        console.log("No");
    }
}