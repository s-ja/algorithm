function solution(n) {
    let a =0
    for (i=0; i<=n; i++){
       if(i%2==0){
        a = a+i
       }
    } 
    var answer = a;
    return answer;
}