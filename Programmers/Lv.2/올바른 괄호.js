function solution(s){
    var answer = true;
    let input = s.split("");
    let count = 0;
    
    if(input[0] == ')' || input[input.length - 1] == '(') {
        answer = false;
    } else {
        for(var i = 0; i < input.length; i++) {
            input[i] == '(' ? count++ : count--;
            if(count == -1) {
                answer = false;
                break;
            }
        }
        answer = count !== 0 ? false : true
    }
    
    return answer;
}

// 예외적인 상황을 앞으로 뺴두기 