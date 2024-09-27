const input = "aabbccddaa";

const counterinput = (input) => {
  let result = "";
  let count = 1;

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++; // Increment the count if the current character is the same as the previous one
    } else {
      result += input[i - 1] + count; // Append the character and its count to the result
      count = 1; // Reset the count for the new character
    }
  }

  return result;
};

console.log(counterinput(input)); // Output: "a2b2c2d2a2"