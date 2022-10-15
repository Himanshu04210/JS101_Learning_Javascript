let count =0;
let num=10;
for (let i=1; i<=num; i++){
  if(i%10 >=5){
    break;
  }else{
    for (j=1; j<num/2; j++){
      count++;
    }
  }
}
console.log(count);