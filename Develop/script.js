// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  const capitalCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const specialCharacters = ['!', '@', '#', '$'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let combinedChars = []
  let yesUpperCase = confirm("Do you like Upper case letters ?")
  let yesLowerCase = confirm("Do you like Lower case letters ?")
  let yesSpecialCharacters = confirm("Do you like special characters ?")
  let yesNumbers = confirm("Do you like numbers ?")
  let lengthOfPassword = prompt("How long do you want your password ?")
  if (yesUpperCase) {
    combinedChars = combinedChars.concat(capitalCaseLetters)
    // console.log(yesUpperCase,combinedChars)
  }
  if (yesLowerCase) {
    combinedChars = combinedChars.concat(lowerCaseLetters)
  }
  if (yesSpecialCharacters) {
    combinedChars = combinedChars.concat(specialCharacters)
  }
  if (yesNumbers) {
    combinedChars = combinedChars.concat(numbers)
  }
  if (combinedChars.length === 0) {
    return "You must choose at least one option."
  }
  console.log(combinedChars)
 
  const random = new Random();
  let password = ""
  password[0] = lowerCaseLetters.charAt(random.nextInt(lowerCaseLetters.length()));
  password[1] = capitalCaseLetters.charAt(random.nextInt(capitalCaseLetters.length()));
  password[2] = specialCharacters.charAt(random.nextInt(specialCharacters.length()));
  password[3] = numbers.charAt(random.nextInt(numbers.length()));

  for (let i = 0; i < length; i++) {
    password[i] = combinedChars.charAt(random.nextInt(combinedChars.length()));
    return password;
  }
  console.log
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
