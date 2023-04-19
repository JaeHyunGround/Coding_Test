function solution(n) {
    let state = true;
    let num = 1;
    
    while(state) {
        if (n % num === 1) {
            state = false;
            break;
        } else {
            num++;
        }
    }
    
    return num;
}


// while 안에서 증감연산자 가능하다

// function solution(n, x = 1) {    
//     while (x++) {
//         if (n % x === 1) {
//             return x;
//         }
//     }    
// }