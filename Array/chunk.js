/**
 * @param {Array} array - The array to process.
 * @param {number} [size=1] - The length of each chunk.
 * @returns {Array} - Returns the new array of chunks.
 */
export default function chunk(array, size = 1) {
  let result = [];
  let index = 0;
  if (!Array.isArray(array) || size <= 0) {
    return [];
  }

 while(index < array.length){
    result.push(array.slice(index, index + size))
    index = index + size
  }

 return result


}