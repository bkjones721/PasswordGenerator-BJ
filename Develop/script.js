// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

funciton generatePassword() {
  const capitalCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const specialCharacters = ['!', '@', '#', '$'];
  const numbers = [1,2,3,4,5,6,7,8,9,0];
  const combinedChars = capitalCaseLetters + lowerCaseLetters + specialCharacters + numbers;
  const random = new Random();
  char[] password = new char[length];

  password[0] = lowerCaseLetters.charAt(random.nextInt(lowerCaseLetters.length()));
  password[1] = capitalCaseLetters.charAt(random.nextInt(capitalCaseLetters.length()));
  password[2] = specialCharacters.charAt(random.nextInt(specialCharacters.length()));
  password[3] = numbers.charAt(random.nextInt(numbers.length()));

  for (int i = 0; i < length; i++) {
     password[i] = combinedChars.charAt(random.nextInt(combinedChars.length()));
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
