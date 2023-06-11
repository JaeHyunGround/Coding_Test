function solution(s){
    var answer = true;
    
    let p_num = 0;
    let y_num = 0;
    let low_s_arr = s.toLowerCase().trim().split("");
    
    for (var i = 0; i < low_s_arr.length; i++) {
        if (low_s_arr[i] == 'p') {
            p_num++;
        } else if (low_s_arr[i] == 'y') {
            y_num++;
        }
    }
    
    if(p_num == y_num) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;


    // return s.toLowerCase().tirm().split(p) === s.toLowerCase().trim().split("y");
}


// 다른 사람의 코드

// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function numPY(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}