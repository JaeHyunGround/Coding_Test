function solution(A,B){
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((sum, crr, i) => sum + crr * B[i], 0)
    
    // 누적 합이 최소가 되기 위해선 최댓값 * 최솟값으로 쳐내면 된다
    
//    let answer = 0;
    
//     let clear_a = 0;
//     let clear_b = 0;
    
//     while(A.length !== 0) {
//         if(A.reduce((a, b) => Math.max(a, b)) >= B.reduce((a, b) => Math.max(a, b))) {
//             clear_a = A.indexOf(A.reduce((a, b) => Math.max(a, b)));
//             clear_b = B.indexOf(B.reduce((a, b) => Math.min(a, b)));
//         } else {
//             clear_a = A.indexOf(A.reduce((a, b) => Math.min(a, b)));
//             clear_b = B.indexOf(B.reduce((a, b) => Math.max(a, b)));
//         }
//         answer += A[clear_a] * B[clear_b]
//         A.splice(clear_a, 1);
//         B.splice(clear_b, 1);
//     }

//    return answer;
}

// 주석 처리된 것은 효율성에서 실패
// 매번 reduce로 최댓값, 최솟값을 찾는 것이 비효율적이다.
// 따라서 한 배열은 오름차순, 다른 배열은 내림차순으로 정렬하여 각 요소를 곱해주면 훨씬 빠르다.