const str = "hello";
const str1 = "world";

// hweolrldo

const alternativeStr = (str, str1) => {
  let result = ""

  for (let i = 0; i < Math.max(str.length, str1.length); i++) {

    if (i < str.length) {
      result = result + str[i]
    }

    if (i < str1.length) {
      result = result + str1[i]
    }

  }
  return result;
}

console.log(alternativeStr(str, str1))
