// Problem 2 : Given an array of string count the overall total number of characters

let array=["Anushka","Susheel","Pavan","Ankit","Himanshu"];

let sum=0;
for(let i=0; i<array.length; i++){
  sum+=array[i].length;
}
console.log(sum);