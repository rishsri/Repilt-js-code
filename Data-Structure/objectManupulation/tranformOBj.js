
const obj = [{
  key: "Sample 1",
  data: "Data1"
},
{
  key: "Sample 1",
  data: "Data1"
}, {
  key: "Sample 2",
  data: "Data2"
}, {
  key: "Sample 1",
  data: "Data1"
}, {
  key: "Sample 3",
  data: "Data1"
}, {
  key: "Sample 4",
  data: "Data1"
},

]


// output = {
//   "Sample 1": [{
//       key: "Sample 1",
//       data: "Data1"
//     }, {
//       key: "Sample 1",
//       data: "Data1"
//     },
//     {
//       key: "Sample 1",
//       data: "Data1"
//     }
//   ],
//   "Sample 2": [],
//   "Sample 3": [],
//   "Sample 4": [],
// }

const objectTranformation = (obj) => {
  let output = {};

  obj.forEach((x) => {

    if (output[x.key]) {
      output[x.key].push(x)
    } else {
      output[x.key] = [x]
    }
  })

  return output

}

console.log(objectTranformation(obj))
