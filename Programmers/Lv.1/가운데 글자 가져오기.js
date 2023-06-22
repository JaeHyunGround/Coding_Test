function solution(s) {
    var answer = [];
    
    let input = s.split("");
    
    if(input.length % 2 !== 0) {
        answer.push(input[Math.floor(input.length / 2)]);
    } else {
        answer.push(input[Math.floor(input.length / 2) - 1], input[Math.floor(input.length / 2)]);
    }
    
    return answer.join("");
}

// 홀수
// (길이 / 2)의 몫 + 1

// 짝수
// 4글자면 23
// 6글자면 34
// 8글자면 45
// length / 2 번째 + length / 2 + 1 번째 