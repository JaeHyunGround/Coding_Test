function solution(arr, divisor) {
    let answer = [];
    
    arr.map((idx) => {
        if (idx % divisor == 0) {
            answer.push(idx);
        }
    });
    
    return (answer.length == 0) ? [-1] : answer.sort((a, b) => a - b);;
}