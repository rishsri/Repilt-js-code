//hello

function reverseAString(str) {
  return str.split("").reverse().join("")
}

function reverseAString(str) {
  if (str == "") { "" }
  else {
    return reverseAString(str.substr(1)) + str.charAt(0)
  }
}

console.log(reverseAString("hellow"))


// ----- input = "hello world" 
// ------- output = "world hello"
const solve = (str) => {
  const st = [];
  var s = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      st.push(s);
      s = "";
    } else {
      s += str[i];
    }
  }
  st.push(s);
  console.log("st", st)
  let res = "";
  for (let i = st.length - 1; i >= 0; i--) {
    res += st[i];
    if (i !== 0) {
      res += " ";
    }
  }
  return res;
};

console.log(solve("hello worls"))
