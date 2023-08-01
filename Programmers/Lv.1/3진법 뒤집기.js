function solution(n) {
  let answer = n.toString(3).split("").reverse().join(""); // toString(n) : 10진법에서 n진법으로 바꾸기
  return parseInt(answer, 3); // parseInt(~, n) : ~을 n진법에서 10진법으로 바꾸기
}
