function solution(d, budget) {
  var answer = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (budget < d[i]) {
      break;
    }
    answer++;
    budget -= d[i];
  }

  return answer;
}

// 최대한 많은 부서에 지원을 해주려면 신청 금액을 기준으로 오름차순 정렬하여 작게 지원한 곳을 많이 사주면 된다.
