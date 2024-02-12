let text =
  "my name is mohammad. i love mohammad name. we have 2 mohammads in our class";

const Transformer = (data) => {
  let result = data.replaceAll("mohammad", "reskomin");
  console.log("task complate!");
  return result;
};
const countOf = (word, data) => {
  let countOfWord = 0;
  return countOfWord;
};

console.log(Transformer(text));
console.log(countOf("mohammad", text));
