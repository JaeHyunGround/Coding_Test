function solution(num) {
    var answer = 0;
    
    while (num !== 1) {
        if(answer == 500) {
            answer = -1;
            break;
        } // 작업을 500번 반복하는 경우를 먼저 앞으로 뺌.
        if(num % 2 == 0) {
            num /= 2;
        } else {
            num = (num * 3) + 1
        }
        answer++;
    }
    
    return answer;
}