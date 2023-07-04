function solution(price, money, count) {
    let answer = 0;
    let sum = 0;
    
    for (var i = 1; i <= count; i++) {
        sum += price * i;
    }
    
    answer = ((money - sum) > 0) ? 0 : Math.abs(money - sum)

    return answer;
}