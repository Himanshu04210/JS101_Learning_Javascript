//Problem 4: Print the average of even numbers from 1 to 100 (both included)

let i=1;
let sum=0;
let even_num=0;
while(i<=100){
  if (i%2==0){
    sum=sum+i;
    even_num=even_num+1;
  }
  i++;
}
console.log(sum/even_num);