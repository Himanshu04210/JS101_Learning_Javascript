let days;
for (let mon = 1; mon <= 12; mon++) {
  if (mon == 2) {
    days = 28;
  } else if (mon == 4 || mon == 6 || mon == 9 || mon == 11) {
    days = 30;
  } else {
    days = 31;
  }
  for(let i=1; i<=days; i++){
    console.log(i+" - "+mon);
  }
    
  
}