function solution(s) {
    
    if(s.length === 4 || s.length === 6) {
        return s.split("").every((item) => !isNaN(item));
    } else {
        return false;
    }
    
}

// isNaN : 매개변수가 숫자가 아닐 때 true 반환
// every() : every() 메소드는 배열 안의 모든 요소가 주어진 판별함수를 통과하는지에 따라 boolean값을 도출한다.

// 자바스크립트에서는 숫자에 e가 붙으면 지수로 인식하여 문자인 경우도 그냥 숫자로 인식해버린다.
// 따라서 split로 하나하나 나눈 뒤 확인해야한다.