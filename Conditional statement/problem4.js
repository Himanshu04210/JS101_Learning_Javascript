//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


let database_user = "itzhimanshu76075@gmail";
let database_pass = "himanshu76075";

let user="itzhimanshu76075@gmail";
let pass="himanshu76075";

// if (database_user==user){
//   if (database_pass==pass){
//     console.log("Login Successful")
//   }else{
//     console.log("Incorrect Password")
//   }
// }else{
//   console.log("Wrong Credential")
// }

(database_user==user && database_pass==pass) ? console.log("Login Successful"):console.log("Wrong Cridetials")