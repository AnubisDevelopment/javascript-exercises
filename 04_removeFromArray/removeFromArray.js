const removeFromArray = function(array, ...x) {
    let filterArray = array.filter((value) => !x.includes(value))
    return filterArray
};
// Do not edit below this line
module.exports = removeFromArray;
