// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

var mergeTwoLists = (list1, list2) => {

  let result = []
  let i = 0;
  let j = 0;
  while (i < list1.length && j < list2.length) {
    result.push(list1[i])
    result.push(list2[i])
    i++
    j++

  }
  return result
};

const data1 = [1, 2, 4]
const data2 = [1, 3, 4]

console.log(mergeTwoLists(data1, data2))
