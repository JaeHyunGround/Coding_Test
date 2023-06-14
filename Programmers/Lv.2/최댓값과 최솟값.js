function solution(s) {
    let answer = [];
    let input = s.toString().trim().split(" ").map(Number); // s를 배열로 변환. reduce를 사용하기 위해서
    
    answer.push(input.reduce((a, b) => Math.min(a,b)), input.reduce((a, b) => Math.max(a,b)));
    
    return answer.join(" ");
}