const array = [1,2,3,5,6,8,9,10,15,12,20,11]

const minEle = (arr) => {
  let min = arr[9]; 
   for (let i =0; i<arr.length;i++){
     if(arr[i] < min ){
       min = arr[i]
     }
   } return min
}

console.log(minEle(array))