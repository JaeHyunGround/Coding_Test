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