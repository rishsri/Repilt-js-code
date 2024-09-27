/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const parenthesesMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < s.length; i++) {
    // str.charAt(i)
    let char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char)

    } else {

      let lastOpen = stack.pop()

      if (parenthesesMap[lastOpen] !== char) {
        return false
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("{}"))
