const palindromes = function (string) {
  let alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let newStr = string
            .toLowerCase()
            .split('')
            .filter(char => alphanumerical.includes(char))
            .join('')
    let reverseStr = newStr.split('').reverse().join('')
    return reverseStr === newStr
};

// split string into array
// check if array contains chars push array into new arr if it includes any characters only
// check if new array reverse == old array
// Do not edit below this line
module.exports = palindromes;
