function solution(array) {
    let answer = 0;
    
    array.sort(function(a, b) {
        return a - b;
    });
    // 배열 정렬 완료. 공식처럼 외우자
    
    answer = (Math.floor(array.length / 2)) + 1;
    // 배열에서 중간의 위치
    
    return array[answer - 1];
    // 배열의 인덱스는 0부터 시작이니 -1을 해준다.
}

// 1. 배열을 오름차순으로 정렬
// 2. 찾은 규칙을 통해 배열 길이에 따라 리턴 값 주기

// 내가 찾은 규칙
// 배열 길이 1 => 1번째가 중앙
// 배열 길이 3 => 2번째
// 배열 길이 5 => 3번째 ...
// 즉 (배열 길이 / 2)의 몫 + 1 한 값이 배열에서 중간 위치가 된다
// 배열의 인덱스는 0부터 시작하므로 -1 한 위치가 return 되야 한다.