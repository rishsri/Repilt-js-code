const pivot = [1, 4, 2, 5, 0];

const pivotPoint = (piv) => {
  for (let i = 0; i < piv.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = i - 1; j >= 0; j--) {
      leftSum = leftSum + piv[j];
    }

    for (let k = i + 1; k < piv.length; k++) {
      rightSum = rightSum + piv[k];
    }

    if (rightSum === leftSum) {
      return piv[i];
    }
  }

  return -1;
}

console.log(pivotPoint(pivot));
