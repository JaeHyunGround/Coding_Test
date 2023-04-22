function solution(arr) {
    var answer = 0;
    let sum = 0;
    
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    answer = sum / arr.length;
    
    return answer;
}


// 버전 2 : reduce 사용
function solution(arr) {
    var answer = 0;
    let sum = arr.reduce((a, b) => a + b);
    
    answer = sum / arr.length;
    
    return answer;
}