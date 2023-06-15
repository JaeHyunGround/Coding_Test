function solution(n) {
    
    let input = n.toString().trim().split("").map(Number);
    input.sort((a, b) => b-a); // 내림차순 정렬
    // sort 한 다음 reverse 해도 됨
    
    return +input.join("");
}