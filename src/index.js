module.exports = function check(str, bracketsConfig) {
    let prevSample = [],
        currentSample = str;
    let bracketPairs = new Map(bracketsConfig);
    str = str.split('');

    while (currentSample.length > 0) {
        let i = 1;

        if (prevSample.length === currentSample.length) {
            return false;
        }

        prevSample = currentSample;

        for (let j = 0; j < str.length - 1; j++) {

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
    return true;
}
