//Problem 2: Print Prime Numbers from 1 to given limit


let num =7;
for (let i=1; i<=num; i++){
  count=0;
  for(let j=1; j<=i; j++){
    if(i%j==0){
      count+=1;
    }
  }
  if(count==2){
    console.log(i,"is prime");
  }
  else{
    console.log(i,"is not prime");
  }
}