let array = [1, 2, 3, 4, 5, 5, 6, 7, 5, 7]

const uniqueElementInArray = (arr) => {
  let i = 0;
  for (let j = 0; j<arr.length; j++){

    if(arr[i] !== arr[j]){
       i++
      arr[i] = arr[j]

    }
  } return arr.slice(0, i+1)
}
console.log(uniqueElementInArray(array))

//output [ 1, 2, 3, 4, 5 ]

// -------------------------------------------------- duplicate --
function duplicates(arr) {
  return arr.filter((x, index) => arr.indexOf(x) === index)
}

// -----------------array of object 

const books = [{
  title: "C++",
  author: "Bjarne"
},
{
  title: "Java",
  author: "James"
},
{
  title: "Python",
  author: "Guido"
},
{
  title: "Java",
  author: "James"
},
];

const a = books.filter((y, i) => books.findIndex((x) => y.title === x.title))

console.log(a, "1")
// ----------------------------------- second app --------

const arr = []

const obj = {}

for (let i in books) {
  const a = books[i]["title"]
  obj[a] = books[i].author
}

for (let j in obj) {
  arr.push({
    title: j,
    author: obj[j]
  })
}

// ----------------------------------


// better approcah 

function duplicates(arr) {
  const seen = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      result.push(arr[i]);
      seen[arr[i]] = true;
    }
  }
  return result;
}

console.log(duplicates([1, 2, 3, 4, 5, 5, 6, 7, 5, 7])); // Output: [1, 2, 3, 4, 5, 6, 7]


