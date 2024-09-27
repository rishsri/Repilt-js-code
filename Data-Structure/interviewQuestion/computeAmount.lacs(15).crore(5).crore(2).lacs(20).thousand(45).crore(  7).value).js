// Input->
// console.log(computeAmount.lacs(15).cro
// re(5).crore(2).lacs(20).thousand(45).crore(
// 7).value) A)
// Output-> 143545000

function computeAmount() {
  let total = 0;
  return {
    lacs: function(args) {
      total += args * 100000
      return this;
    },
    crore: function(args) {
      total += args * 10000000
      return this
    },
    thousand: function(args) {
      total += args * 10000000
      return this
    },
    value: function() {
      return total;
    }
  }
}

let a = computeAmount().lacs(15).crore(5).value();

console.log(a);



class ComputeAmount {
  constructor() {
    this.result = 0;
  }

  lacs(value) {
    this.result += value * 100000;
    return this;
  }

  crore(value) {
    this.result += value * 10000000; // 1 crore = 10 million
    return this;
  }

  thousand(value) {
    this.result += value * 1000;
    return this;
  }

  value() {
    return this.result;
  }
}

let a = new ComputeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();

console.log(a);  // Output -> 143545000