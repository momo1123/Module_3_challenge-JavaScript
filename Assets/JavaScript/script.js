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
      // generatePassword = ("This is the current value of writePassword",writePassword)
  // var password = generatePassword();
  // console.log("this is the current value of password",password)
  // var passwordText = document.querySelector("#password");
  // console.log("this is the current value of passwordText", passwordText);
  // passwordText.value = password;

  var user_prompt = window.prompt("Plese choose the length of the password");
  if (!user_prompt){
      return;
  } 
  if (user_prompt < 8  || user_prompt > 128){
        window.alert("Please select 8 - 128 caharacters for password");
        writePassword();
        console.log("this is the if statement where the user chooses incorrect number of characters")
        return;
      } 
  if (user_prompt >= 8 || user_prompt <128){
    console.log("User chose the number", user_prompt);
      var lowercase_prompt = window.prompt("Do you want to include lowercase characters?");

        if (lowercase_prompt === "yes" || lowercase_prompt === "YES"){
          console.log("This is the lowercase yes response");
          var lower_abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
          for (var i = 0;
              i < user_prompt;
              i++) {
                var lower_password = [lower_abc[Math.floor(Math.random() * lower_abc.length)]];
                var password = lower_password;
                console.log("lower_password chars: ", password);
          }
          console.log("this is the value of i", i);
        } else {
          console.log("this is the else for the lowercase user_prompt ===yes");
        }
        }
  if (lowercase_prompt === "yes" || lowercase_prompt === "YES"){
        var uppercase_prompt= window.prompt("Do you want to include uppercase characters?");
        if (uppercase_prompt === "yes" || uppercase_prompt === "YES"){
          console.log("This is the uppercase user_pormpt === yes option");
          var upper_abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
          for (var i = 0;
            i < user_prompt;
            i++) {
              var upper_password = [upper_abc[Math.floor(Math.random() * upper_abc.length)]];
               password = password.concat(upper_password);
               console.log("l + u - chars:", password);
        }
        } else {
          console.log("this is the else for the uppercase user_prompt === YES");
        }
        }
  if (uppercase_prompt ==="yes" || uppercase_prompt ==="YES"){
          var num_prompt = window.prompt("Do you want to include numbers?");
          if (num_prompt === "yes" || num_prompt === "YES"){
            console.log("This is the numbers user_pormpt === yes option");
            var num_123 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128]
            for (var i = 0;
              i < user_prompt;
              i++) {
                var num_password = [num_123[Math.floor(Math.random() * num_123.length)]];
                password = password.concat(num_password);
                console.log("l + u + n - chars", password);
          }
          
          }else {
            console.log("this is the else for the numbers user_prompt ===yes");
          }
        }
  if (num_prompt === "yes" || num_prompt=== "YES"){
          var special_prompt= window.prompt("Do you want to include special characters?");
          if (special_prompt === "yes" || special_prompt === "YES"){
            console.log("This is the special characters user_pormpt === yes option");
            var special_char = ["`", "@", "!", "#", "$" , "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "~", "|", ";", ":", "'" ];
            for (var i = 0;
              i < user_prompt;
              i++) {
                var special_password = [special_char[Math.floor(Math.random() * special_char.length)]];
                password = password.concat(special_password);
                console.log("l + u + n + s - chars", password);
                for (var i = 0;
                     i < user_prompt;
                     i ++){
                      console.log("Password letter", i, " and password char",password[i]);

                  }
          }
          }else {
            console.log("this is the else for the special characters user_prompt ===yes");
          }
        } else{
          window.alert("This is the Else statement, the function will be return;")
          return;
        }

        // var lower_abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        // var uper_abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        // console.log("this is an array from lower_abc and upper_abc \n" +lower_abc);
      
      
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);