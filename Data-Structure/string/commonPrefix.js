/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    let totalLength = prefix.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (prefix !== s?.slice(0, totalLength)) {
            //flowe !== 
            totalLength--; // 5
            if (totalLength === 0) {
                return "";
            }

            prefix = prefix.slice(0, totalLength)

        }
    }

    return prefix
};