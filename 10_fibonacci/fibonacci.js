const fibonacci = function(x) {
    let fib = [0,1]
    if (x < 0){
        return 'OOPS'
    } 
    else {
    for (let i = 2; i <= x; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    } return fib[x]
}
};
// given num, iterate and add 
// 0, 1, 1, 2, 3, 5, 8
// Do not edit below this line
module.exports = fibonacci;
