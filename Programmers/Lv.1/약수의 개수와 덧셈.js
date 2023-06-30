function solution(left, right) {
    var answer = 0;
    
    for(var i = left; i <= right; i++) {
        let count = 0;
        for(var j = 1; j <= i; j++) {
            if(i % j == 0) count++;
        }
        
        (count % 2 == 0) ? answer += i : answer -= i;
    }
    
    return answer;
}

// 제곱근이 정수면 약수의 개수가 홀수다
// .sqrt() : 제곱근을 구해줌 (루트)
// Number.isInteger() : 주어진 값이 정수인지를 판별