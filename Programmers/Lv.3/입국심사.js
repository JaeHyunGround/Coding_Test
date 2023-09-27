// 단위가 큰 수를 다루는 문제 => 로그 시간으로 해결 => 이진 탐색 !!
// 시간을 기준으로 한다면 선형 로그 시간으로도 충분히 가능해보임.

// 이 문제는 특정 값을 찾는 것이 아님.
// 우리가 찾는 것은 "최소 몇 분에 심사가 끝나는가 ?"
// ㄴ 이러한 유형의 문제를 [결정 문제] 라고 함. => 이진 탐색 이용 = 파라메트릭 서치 라고도 부른다.

function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b);
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
    // 입국 심사 받는 사람 총 수 = sum

    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
