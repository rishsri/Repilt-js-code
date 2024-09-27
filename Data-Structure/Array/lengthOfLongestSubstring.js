/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxCount = 0;
    let start = 0;
    let seen = new Map()
    for (let end = 0; end < s.length; end++) {

        if (seen.has(s[end])) {
            start = Math.max(seen.get(s[end]) + 1, start)
        }


        seen.set(s[end], end)

        maxCount = Math.max(maxCount, end - start + 1)


    }

    return maxCount

};