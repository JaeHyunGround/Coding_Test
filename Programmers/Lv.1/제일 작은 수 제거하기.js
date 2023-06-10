function solution(arr) {
    var answer = [];
    let minNum = 0;
    let min_idx = 0;
    
    
    if(arr[0] == 10 && arr.length == 1) {
        answer.push(-1)
    } else {
        minNum = arr.reduce((a, b) => Math.min(a, b));
        min_idx = arr.indexOf(minNum);
        arr.splice(min_idx, 1);
        answer = [...arr]
    }
    
    return answer;
}