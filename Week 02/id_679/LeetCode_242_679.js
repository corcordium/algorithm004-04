var isAnagram = function(s, t) {
    if (analyseStr(s) === analyseStr(t)) {
        return true;
    }
    return false;
};

function analyseStr (str) {
    return str.split('').sort().join('');
} 