function solution(n, m) {

    let num = n > m ? n : m;
    let max = 0; // 최대공약수
    let min = 0; // 최소공배수
    
    for(var i = 1; i <= num; i++) {
        if(n % i === 0 && m % i === 0) {
            max = i;
        }
    }
    
    min = n * m / max;
    
    return [max, min];
}

// 최대공약수 : 두 수가 동시에 나누어 떨어지는 수 중 가장 큰 수
// 최소공배수 : 두 수의 곱 / 최대공약수