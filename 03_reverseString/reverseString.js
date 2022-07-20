const reverseString = function(str) {
    strContainer = [];
    for (let i = 0; i < str.length; i++) {
        strContainer.push(str[i])
    }
    return strContainer.reverse().join("")
};

// Do not edit below this line
module.exports = reverseString;
