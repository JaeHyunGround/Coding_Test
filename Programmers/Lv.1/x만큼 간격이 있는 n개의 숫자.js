function solution(x, n) {
    let answer = [];
    
    for (var i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    
    return answer;
}