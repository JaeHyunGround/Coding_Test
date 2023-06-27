function solution(n) {
    var answer = '';
    
    for (var i = 0; i < n; i++) {
        (i % 2 == 0) ? answer += '수' : answer += '박';
    }
    
    return answer;
}