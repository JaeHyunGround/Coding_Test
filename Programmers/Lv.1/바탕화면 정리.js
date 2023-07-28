function solution(wallpaper) {
  var answer = [];

  // 0번 인덱스
  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].indexOf("#") !== -1) {
      answer.push(i);
      break;
    }
  }

  // 1번, 2번 인덱스
  let one_idx = 50;
  let two_idx = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].indexOf("#") >= 0 && one_idx > wallpaper[i].indexOf("#")) {
      one_idx = wallpaper[i].indexOf("#");
    }
    if (wallpaper[i].indexOf("#") !== -1) {
      two_idx = i + 1;
    }
  }
  answer.push(one_idx, two_idx);

  // 3번 인덱스
  let three_idx = 50;
  for (let i = 0; i < wallpaper.length; i++) {
    let case_arr = wallpaper[i].split("").reverse().join("");

    if (case_arr.indexOf("#") != -1 && three_idx > case_arr.indexOf("#")) {
      three_idx = case_arr.indexOf("#");
    }
  }

  answer.push(Number(wallpaper[0].length) - Number(three_idx));

  return answer;
}

// (세로, 가로)
// result의 인덱스 0번은 wallpaper 의 인덱스 중에서 #을 포함한 문자열 중 첫번쨰
// 1번은 #이 제일 앞에 있는 문자열에서의 # 인덱스 번호
// 2번은 wallpaper의 요소 중 #을 포함한 문자열 중 제일 마지막
// 3번은 #이 제일 뒤에 있는 문자열 에서의 # 인덱스 번호 <= 맨 마지막 요소이니 reverse 사용
