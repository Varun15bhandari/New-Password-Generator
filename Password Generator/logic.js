const display=document.getElementById("display");
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const specialSymbols="!@#^*)(&%$";
const length=11;
const allChars=upperCase+lowerCase+numbers+specialSymbols;
function generatePassword(){
  let password="";
  password += upperCase[Math.floor(Math.random()*upperCase.length)];
  password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
  password += numbers[Math.floor(Math.random()*numbers.length)];
  password += specialSymbols[Math.floor(Math.random()*specialSymbols.length)];
  while(length>password.length){
    password += allChars[Math.floor(Math.random()*allChars.length)];
  }
    display.value=password;
}
function copyPassword(){
  display.select();
  document.execCommand("copy");
}
