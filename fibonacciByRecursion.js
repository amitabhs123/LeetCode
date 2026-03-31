function fibonacci(n){
    let currentNumber= n-1;
    if(currentNumber>=0){
        return (currentNumber + fibonacci(currentNumber))
    }
    return 0
}