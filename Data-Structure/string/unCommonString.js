//uncommon character

const string1 = "Rishabh";
const string2 = "Srivastava";

const unCommonString = (str1, str2) => {
  let result = [];

  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i]) && !result.includes(str1[i]))
      result.push(str1[i])
  }

  for (let j = 0; j < str2.length; j++) {
    if (!str1.includes(str2[j]) && !result.includes(str2[j])) {
      result.push(str2[j])
    }
  }

  return result;
}

console.log(unCommonString(string1, string2));


// --------------


//uncommon character

const string1 = "Rishabh";
const string2 = "Srivastava";

const unCommonString = (str1, str2) => {
  let result = [];
  let charObj = {};

  for (let i of str1) {
    charObj[i] = (charObj[i] || 0) + 1
  }

  for (let j of str2) {
    charObj[j] = (charObj[j] || 0) + 1
  }

  for (let k in charObj) {
    if (charObj[k] === 1) {
      result.push(k)
    }
  }

  return result;
}

console.log(unCommonString(string1, string2));
