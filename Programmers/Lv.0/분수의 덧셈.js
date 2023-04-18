function solution(denum1, num1, denum2, num2) {
    var answer = [];

    const denum = (denum1 * num2) + (denum2 * num1);
    const num = num1 * num2;
    // 1/2 + 3/4 = (1*4 + 3*2) / 4*2 = 10/8 을 한 과정

    let minNum = (denum < num) ? denum : num;
    // 분자와 분모 중 작은 값을 minNum에 넣어줌.

    for (let i = minNum; i >= 1; i--) {
        if(denum % i === 0 && num % i === 0) {
            return [denum / i, num / i];
            break;
        }
    }

    return answer;
}