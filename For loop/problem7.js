let num=15;
let count=0;
for (let i=2;i<=num-1;i++){
  if(num%i==0){
    count+=1;
    break;
  }
}
if(count>0){
  console.log("No");
}else{
  console.log("Yes")
}