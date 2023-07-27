function solution(s) {
  let input = s.split(" ");
  let answer = "";

  for (let i = 0; i < input.length; i++) {
    let cases_string = input[i].split("");
    for (let j = 0; j < input[i].length; j++) {
      answer +=
        j % 2 === 0
          ? cases_string[j].toUpperCase()
          : cases_string[j].toLowerCase();
    }
    i != input.length - 1 ? (answer += " ") : null;
  }

  return answer;
}
