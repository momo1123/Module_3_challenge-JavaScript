// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var user_prompt = window.prompt("Plese choose the length of the password");
//   if(user_prompt < 8  || user_prompt > 128){
//     window.alert("Please select 8 - 128 caharacters for password");
//     writePassword();
  // } else if (!user_prompt){
  //   return;
  //  }
function writePassword(){
  generatePassword = ("This is the current value of writePassword",writePassword)
  var password = generatePassword();
  console.log("this is the current value of password",password)
  var passwordText = document.querySelector("#password");
  console.log("this is the current value of passwordText", passwordText);

  passwordText.value = password;
  var user_prompt = window.prompt("Plese choose the length of the password");
  if (!user_prompt){
      return;
  } 
  if (user_prompt < 8  || user_prompt > 128){
        window.alert("Please select 8 - 128 caharacters for password");
        writePassword();
        console.log("this is the if the user chooses incorrect number of strings")
        return;
      } 
  if (user_prompt >= 8 || user_prompt <=128){
      var lowercase_prompt = window.prompt("Do you want to include lowercase characters?");
        if (lowercase_prompt === "yes"){
          console.log("This is the lowercase yes response");
          var lower_abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];          
        } else {
          console.log("this is the else for the lowercase user_prompt ===yes");
        }
        }
  if (lowercase_prompt === "yes" || lowercase_prompt === "yes"){
        var uppercase_prompt= window.prompt("Do you want to include uppercase characters?");
        if (uppercase_prompt === "yes"){
          console.log("This is the uppercase user_pormpt === yes option");
          var upper_abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        } else {
          console.log("this is the else for the uppercase user_prompt ===yes");
        }
        }
  if (uppercase_prompt ==="yes" || uppercase_prompt ==="YES"){
          var num_prompt = window.prompt("Do you want to include numbers?");
          if (num_prompt === "yes"){
            console.log("This is the numbers user_pormpt === yes option");
          }else {
            console.log("this is the else for the numbers user_prompt ===yes");
          }
        }
  if (num_prompt === "yes" || num_prompt=== "YES"){
          var special_prompt= window.prompt("Do you want to include special characters?");
          if (special_prompt === "yes"){
            console.log("This is the special characters user_pormpt === yes option");
          }else {
            console.log("this is the else for the special characters user_prompt ===yes");
          }
        } else{
          window.alert("This is the Else statement, the function will be return;")
          return;
        }

        var lower_abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var uper_abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        console.log("this is an array from lower_abc and upper_abc \n" +lower_abc);
      
      
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);