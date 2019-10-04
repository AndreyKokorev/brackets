module.exports = function check(str, bracketsConfig) {
    let prevSample = [],
        currentSample = str;
    let bracketPairs = new Map(bracketsConfig);
    str = str.split('');

    while (true) {
        let i = 1;

        if (prevSample.length === currentSample.length) {
            return false;
        }

        prevSample = currentSample;

        if (str.length === 0) {
            return true;
        } else if (str.length === 1) {
            return false;
        }

        for (let j = 0; j < str.length; j++) {
            if (j === str.length - 1) {
                break;
            }
            if (bracketPairs.get(str[j]) === str[i]) {
                str.splice(j, 2);
                j -= 2;
                i--;
                continue;
            }
            i++;
        }
        currentSample = str;
    }
}
