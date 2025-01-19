const sumAll = function(x,y) {
    let sum = 0
    if (x !== Number(x) || y !== Number(y)){
        return 'ERROR'
    } else if (x < 0 || y < 0){
        return 'ERROR'
    } else if (x !== Math.floor(x) || y !== Math.floor(y)){
        return 'ERROR'
    } else if (x > y){
        for (let i = y; i <= x; i++){
            sum += i
        }
        return sum
    } else {
        for (let i = x; i <= y; i++){
            sum += i
        }
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
