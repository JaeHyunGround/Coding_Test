function solution(arr1, arr2) {
    let answer = [];
    
    for (var i = 0; i < arr1.length; i++) {
        let sum = [];
        for (var j = 0; j < arr1[i].length; j++) {
            sum.push(Number(arr1[i][j]) + Number(arr2[i][j]));
        }
        answer.push(sum)
    }
    
    return answer;
}