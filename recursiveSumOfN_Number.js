function sumOfNumber (number) {
    if(number === 0){
        return 0;
    }
    return number + sumOfNumber(number - 1);
}