function solution(n) {
    var answer = 0;
    
    let sqrt = Math.sqrt(n); // 제곱근을 구해줌. Math.sqrt(4) = 2
    let isInt = parseInt(sqrt) === sqrt; // 변수엔 식이 들어갈 수 있다 !!!!!
    
    if (isInt) {
        answer = Math.pow((sqrt + 1), 2); // Math.pow(2, 2) = 2^2 = 4
    } else {
        answer = -1;
    }
    
    return answer;
}