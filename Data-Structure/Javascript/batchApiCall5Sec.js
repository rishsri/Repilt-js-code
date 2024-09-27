const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const chop = (arr) => {
  const temp = [...arr];
  const output = [];

  for (let i = 0; i < temp.length; i += 5) { // Corrected for loop
    output.push(temp.slice(i, i + 5));
  }
  return output;
}

let a = chop(arr);

const mockApiCall = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Processed:", data);
      resolve(data);
    }, 1000);
  });
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const batchApi = async (batches) => {
  const results = [];

  for (let i = 0; i < batches.length; i++) {
    const batchResults = await Promise.all(batches[i].map(mockApiCall));
    results.push(batchResults);
    if (i < batches.length - 1) {
      await delay(5000); // Delay of 5 seconds between batches
    }
  }

  return results;
}

batchApi(a).then(results => {
  console.log("All batches processed with delay:", results);
});