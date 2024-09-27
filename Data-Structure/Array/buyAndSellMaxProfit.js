//Max Profit
// ip [7,1,5,3,6,4]
// op: 5 because 6-1 = 5

const maxProfit = (arr) => {
  let buy = arr[0]
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (buy > arr[i]) {
      buy = arr[i]
    }

    // checke the profit 
    const profit = arr[i] - buy;

    // update the maxprofit
    if (profit > maxProfit) {
      maxProfit = profit
    }

  }


  return maxProfit



}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))