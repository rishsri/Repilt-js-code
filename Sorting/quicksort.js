
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1]
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }
  return [
    ...quickSort(left),
    pivot,
    ...quickSort(right)
  ];
}
const sorting = [-2, 1, 6, 9, 8, -1, 5]
console.log(quickSort(sorting))



//--------------
sortedProducts.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

https://www.smashingmagazine.com/2020/03/sortable-tables-react/


// ---------------------------------------------------------------------

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

const a = books.sort((a, b) => {
  return b.author.localeCompare(a.author)
})

console.log(a)