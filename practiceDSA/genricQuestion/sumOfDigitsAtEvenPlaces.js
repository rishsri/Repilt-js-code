const num = 123456;

const sumOfDigitsAtEvenPlaces = (number) => {
  let numStr = String(number)
  let result = 0
  

  for (let i = 0; i<numStr.length; i++){

    if(parseInt(numStr[i]) % 2 === 0){

      result = result + parseInt(numStr[i])
    }
  }
  return result
}


console.log(sumOfDigitsAtEvenPlaces(num)); // Output: 2 + 4 + 6 = 12