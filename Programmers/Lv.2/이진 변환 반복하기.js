function solution(s) {
  let input = s.split("");
  let count = 0; // 이진 변환 횟수
  let zero_num = 0; // 제거된 모든 0의 개수

  while (input.join("") !== "1") {
    input.sort();
    zero_num += input.indexOf("1"); // 첫 '1'의 인덱스가 0의 갯수와 같기 떄문
    input.splice(0, input.indexOf("1")); // sort로 정렬을 했기 때문에 맨 앞에서부터 1이 나오기 전까지 splice 한다. splice(a, b) : a이상 b미만까지 잘라라
    input = input.length.toString(2).split(""); // input를 이진변환 후 배열화 해줌
    count++;
  }

  return [count, zero_num];
}

// while (input.join("") !== "1") {
//     for (let i = 0; i < input.length; i++) {
//         if(input[i] == 0) {
//             input.splice(i, 1);
//             i--;
//             zero_num++;
//         }
//     }
//     input = (input.length).toString(2).split("");
//     count++;
// }
// 시간초과 된 풀이의 while 문
