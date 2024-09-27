const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ['Front', 'End', 'JavaScript'];


function highlights(str, words) {
  const uniqueWords = new Set(words);

  let string = str.split(" ")

  const result = string.map((word) => {

    let output = "";
    if (uniqueWords.has(word)) {
      output = `<strong>${word}</strong>`
    } else {
      for (let i = 0; i < word.length; i++) {
        const prefix = word.slice(0, i + 1);
        const suffix = word.slice(i + 1);
        console.log(prefix, suffix, "000---")

        if (uniqueWords.has(prefix) && uniqueWords.has(suffix)) {
          output = `<strong>${prefix}${suffix}</strong>`;
          break;
        } else if (uniqueWords.has(prefix) && !uniqueWords.has(suffix)) {
          output = `<strong>${prefix}</strong>${suffix}`;
        } else if (!uniqueWords.has(prefix) && uniqueWords.has(suffix)) {
          output = `${prefix}<strong>${suffix}</strong>`;
        }
      }
    }
    return output !== '' ? output : word;
  })

  return result.join(" ");
}

console.log(highlights(str, words))
