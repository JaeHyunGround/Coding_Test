process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]); // a : 가로, b : 세로
    
    for (var i = 0; i < b; i++) {
        let answer = "";
        for(var j = 0; j < a; j++) {
            answer += "*"
        }
        console.log(answer);
    }
    
    // console.log((('*').repeat(a)+`\n`).repeat(b))
    
});