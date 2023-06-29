function solution(a, b) {
    // let answer = 0;
    // for (var i = 0; i < a.length; i++) {
    //     answer += a[i] * b[i];
    // }
    
    let answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0);
    // 0 을 주지 않는다면 acc는 a의 첫번째 요소, cur은 2번째 요소가 된다 !! 그래서 0이 없으면 틀린 값이 나옴
    
    return answer;
}