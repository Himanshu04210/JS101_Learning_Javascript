// Problem 1 : Given a string count the number of words in that string

let string = "I am Iron man";
let count = 1;
for (let i = 0; i <= string.length - 1; i++) {
  if (string[i] == " ") {
    count += 1;
  }
}
if (string.length == 0) {
  console.log(count);
} else {
  console.log(0);
}