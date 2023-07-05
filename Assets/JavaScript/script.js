var generateBtn = document.querySelector("#generate");
var password_display = document.querySelector("#password");
var lower_abc = "abcdefghijklmnopqrstuvwxyz",
upper_abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
number_123 = "0123456789",
sepcial_char = "!@#$%^&*()_+=-[]{}\|;:',.\]\][!##%*&$(*#!@#)(*&<>/?",
password_lower_abc = "",
password_upper_abc = "",
password_number_123 = "",
password_speical_char = "",
final_password = "";
var all_password_chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-[]{}|;:',.<>/?";
// Function that with click event
function writePassword() {
  // Resets the passwords before generating a new password
  password_display.value = null;
  var user_prompt = window.prompt("Plese choose the length of the password");
    if (!user_prompt){
      return;
  } 
  if(user_prompt < 8  || user_prompt > 128){
    window.alert("Please select 8 - 128 caharacters for password");
    writePassword();
  }
// If user selects the correct amount the following statements are triggered
  if (user_prompt >= 8 || user_prompt <128){
  var lowercase_prompt = window.prompt("Do you want to include lowercase characters?");
  var uppercase_prompt = window.prompt("Do you want to include uppercase characters?");
  var number_prompt = window.prompt("Do you want to include numbers?");
  var specialchar_prompt = window.prompt("Do you want to include special characters?");
  // If all are yess
  if ((lowercase_prompt === "YES" || lowercase_prompt === "yes") && (uppercase_prompt === "YES" || uppercase_prompt === "yes") &&
  (number_prompt === "YES" || number_prompt === "yes") && (specialchar_prompt === "YES" || specialchar_prompt === "yes")){
       for (var i = 0, n = user_prompt; i < user_prompt; ++i) {
    password_display.value += all_password_chars.charAt(Math.floor(Math.random() * all_password_chars.length));
    console.log("All yes");
    }
  }
  // If only lowercase is true
  if (((lowercase_prompt === "YES" || lowercase_prompt === "yes") && (uppercase_prompt === "NO" || uppercase_prompt === "no") &&
  (number_prompt === "NO" || number_prompt === "no") && (specialchar_prompt === "NO" || specialchar_prompt === "no"))){
    for (var i = 0, n = user_prompt; i < user_prompt; ++i) {
      password_display.value += lower_abc.charAt(Math.floor(Math.random() * lower_abc.length));
      console.log("Lowercase YES");
    }
  }
  // If only upper case is true
  if (((lowercase_prompt === "NO" || lowercase_prompt === "no") && (uppercase_prompt === "YES" || uppercase_prompt === "yes") &&
  (number_prompt === "NO" || number_prompt === "no") && (specialchar_prompt === "NO" || specialchar_prompt === "no"))){
    for (var i = 0, n = user_prompt; i < user_prompt; ++i) {
      password_display.value += upper_abc.charAt(Math.floor(Math.random() * upper_abc.length));
      console.log("Uppercase YES");
    }
  }
  // If only number is true
  if (((lowercase_prompt === "NO" || lowercase_prompt === "no") && (uppercase_prompt === "NO" || uppercase_prompt === "no") &&
  (number_prompt === "YES" || number_prompt === "yes") && (specialchar_prompt === "NO" || specialchar_prompt === "no"))){
    for (var i = 0, n = user_prompt; i < user_prompt; ++i) {
      password_display.value += number_123.charAt(Math.floor(Math.random() * number_123.length));
      console.log("Number YES");
    }
  }
  // If only special chars is true
  if (((lowercase_prompt === "NO" || lowercase_prompt === "no") && (uppercase_prompt === "NO" || uppercase_prompt === "no") &&
  (number_prompt === "NO" || number_prompt === "no") && (specialchar_prompt === "YES" || specialchar_prompt === "yes"))){
    for (var i = 0, n = user_prompt; i < user_prompt; ++i) {
      password_display.value += sepcial_char.charAt(Math.floor(Math.random() * sepcial_char.length));
      console.log("Special Char YES");
      }
    }
  } if (((lowercase_prompt === "NO" || lowercase_prompt === "no") && (uppercase_prompt === "NO" || uppercase_prompt === "no") &&
  (number_prompt === "NO" || number_prompt === "no") && (specialchar_prompt === "NO" || specialchar_prompt === "no"))){
    window.alert("Please select at least one type");
    writePassword();
  }
}
generateBtn.addEventListener("click", writePassword);
