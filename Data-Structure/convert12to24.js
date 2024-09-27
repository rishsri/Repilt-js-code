// 12 hours to 24 hours 
//1:02 pm

const convert12to24 = (time12h) => {
  const [time, modifier] = time12h.split(" ")
  console.log("time",time)
  let [hours, minutes] = time.split(":")
  if (hours === "12") hours = "00"
  if (modifier === "PM") hours = parseInt(hours) + 12;
  return `${hours}: ${minutes}`
}

console.log(convert12to24("01:02 PM"))
console.log(convert12to24("12:00 PM"))

