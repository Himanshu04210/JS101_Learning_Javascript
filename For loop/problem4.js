let sum = 0;
for (i = 1; i <= 15; i++) {
  if ((i % 2 == 0) || (i % 5 == 0)) {

    sum = sum + i;
  }
}
console.log(sum);


let num=7;
let mult = 1;
for (i = 1; i <= num; i++) {
  (mult = mult * i);
}
console.log(mult);