// 그리디

const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');

const [N,M] = input[0].split(' ').map(a=>Number(a)) // N : 스크린, M : 바구니 길이
const J = Number(input[1]) // 사과의 갯수
const apples = input.slice(2,input.length).map(a=> Number(a)) 
// input의 인덱스 2번부터 input 길이 미만의 인덱스 번호까지 배열로 뽑아낸다.
 
let answer = 0
let start = 1 // 바구니의 시작점
let end = M // 바구니의 끝점

// for..of
// 반복가능한 객체에 대해서 반복하는 루프 생성
// 즉 apples의 길이 만큼 for문을 돌고 apples를 돌 때 해당 요소는 apple
// map과 유사한 매커니즘. 결과값은 아예 다름
for(let apple of apples){
    if (end < apple){
        answer += apple - end
        end = apple
        start = apple - (M - 1)
    }

    else if (start > apple){
        answer += start - apple
        start = apple
        end = apple + (M - 1)
    }
}

console.log(answer)