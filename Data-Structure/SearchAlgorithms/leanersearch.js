function linearSearch(n,target) {
   for (let i = 0; i<n.length; i++){
     if(n[i] == target){
       return i
     } 
   }
  return -1
}

console.log(linearSearch([10,20,6,30,40],6))