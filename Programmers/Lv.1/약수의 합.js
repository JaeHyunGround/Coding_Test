function solution(n) {
    let measure_sum = 0; // 약수의 합을 담을 변수
    
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            measure_sum += i;
        }
    }
    
    return measure_sum;
}

// 약수 : 어떠한 수로 나누었을 때 나누어 떨어지는 것.