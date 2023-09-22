function solution(s) {
  // 풀이 1
  // var answer = true;
  // let input = s.split("");
  // let count = 0;

  // if(input[0] == ')' || input[input.length - 1] == '(') {
  //     answer = false;
  // } else {
  //     for(var i = 0; i < input.length; i++) {
  //         input[i] == '(' ? count++ : count--;
  //         if(count == -1) {
  //             answer = false;
  //             break;
  //         }
  //     }
  //     answer = count !== 0 ? false : true
  // }

  // return answer;

  // 풀이 2
  let count = 0;

  // 배열이나 문자열 돌 떈 for - of
  for (const c of s) {
    if (c === "(") {
      count++;
    } else {
      if (count === 0) {
        return false;
      }
      count--;
    }
  }

  return count === 0;
}

// 예외적인 상황을 앞으로 뺴두기
