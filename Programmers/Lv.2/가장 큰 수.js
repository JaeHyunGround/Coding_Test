function solution(numbers) {
  let answer = numbers
    //map으로 numbers를 일관되게 string으로 변환한다.
    .map((numbers) => String(numbers))
    .sort((a, b) => b + a - (a + b))
    .join("");

  //모든 요소가 0인 경우는 제외해야 하니 삼항연산자 사용
  return answer[0] === "0" ? "0" : answer;
}

// 두 문자열을 비교해 더 큰게 앞에 오도록 (b+a) - (a+b)를 return
// 두 문자열을 이어서 비교하는 (b+a) - (a+b)가 핵심
