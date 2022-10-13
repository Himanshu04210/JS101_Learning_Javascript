let sum = 0;
let even_num = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
    even_num += 1;
  }
}
console.log(sum / even_num);