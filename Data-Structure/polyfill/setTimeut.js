function setTimeoutPolyFill(callback,delay) {
	const startTime = new Date().getTime();
  while(true){
  	const currentTime = new Date().getTime();
    if(currentTime - startTime === delay) {
    	callback(arguments);
      break;
    }
  }
}
setTimeoutPolyFill(function(){
	console.log("hi")
},5000)





