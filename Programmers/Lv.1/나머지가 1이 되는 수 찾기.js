function solution(n) {
    let state = true;
    let num = 1;
    
    while(state) {
        if (n % num === 1) {
            break;
        } else {
            num++;
        }
    }
    
    return num;
}


// function solution(n, x = 1) {    
//     while (x++) {
//         if (n % x === 1) {
//             return x;
//         }
//     }    
// }