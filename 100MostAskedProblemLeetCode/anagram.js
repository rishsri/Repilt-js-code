const a = "ajay";
const b = "aajy";

const areAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false; // If lengths are different, they can't be anagrams
  }

  let frequencyMap1 = {};
  let frequencyMap2 = {};

  for (let char of str1) {
    frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequencyMap2[char] = (frequencyMap2[char] || 0) + 1;
  }

  // Compare the frequency maps
  for (let char in frequencyMap1) {
    if (frequencyMap1[char] !== frequencyMap2[char]) {
      return false; // If any frequency is different, they are not anagrams
    }
  }

  return true; // If all frequencies match, they are anagrams
};

console.log(areAnagrams(a, b));
