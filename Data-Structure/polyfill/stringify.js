const person = {
  "name": "John Doe",
  "age": 30,
  "isMarried": false,
  "children": ["Jane", "Mark"],
  "address": {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  }
};

const stringSeralize = (value) => {

  const type = typeof value;

  if (type === "string") {
    return `"${value}"`
  } else if (type === "number" || type === "boolean") {
    return String(value)
  } else if (value === null) {
    return "null"
  } else if (Array.isArray(value)) {
    const arr = value.map((x) => stringSeralize(x));
    return `[${arr.join(",")}]`;
  } else if (type === "object") {
    const objVal = Object.keys(value).map((x) => `"${x}": ${stringSeralize(value[x])}`)
    return `{${objVal.join(",")}}`;
  }
  return null
}


console.log(stringSeralize(person))

/* '{"name":"John Doe","age":30,"isMarried":false,"children":["Jane","Mark"],"address":{"street":"123 Main St","city":"Anytown","country":"USA"}}' */
