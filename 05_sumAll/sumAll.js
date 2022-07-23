const sumAll = function(startNum, endNum) {

    const lowNum = Math.min(startNum, endNum); 
    const highNum = Math.max(startNum, endNum); 

    let total = 0; 

    if (startNum < 0 | endNum < 0) {
        return 'ERROR';
    } else if (typeof startNum != 'number' | typeof endNum != 'number') {
        return 'ERROR';
    } else {
        for (let i = lowNum; i <= highNum; i++) {
            total = total + i;
        }
    }


    return total; 
};

// Do not edit below this line
module.exports = sumAll;
