function solution(n) {
    let num_array = n.toString().trim().split("").map(Number);
    let sum = 0;
    
    for (var i = 0; i < num_array.length; i++) {
        sum += num_array[i];
    }

    return sum;
}