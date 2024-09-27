const str1 = "abcd";
const str2 = "adcb";

const areRotations = (str1, str2) => {
  if(str1.length !== str2.length){
    return false
  }

  let concatStr = str1 + str1

  if(!concatStr.includes(str2)){
    return false
  }



  return "rotatinal"
}

console.log(areRotations(str1, str2)); // Output: true (str2 is a rotation of str1)