function factorialOfNumber(n){
    if(n === 0){
        return 1;
    }
    return n * factorialOfNumber(n-1)
}