//task1
function upperCase(str) {
  const regexp = /^[A-Z]/;
  if (regexp.test(str)) {
    console.log("String's first character is uppercase");
  } else {
    console.log("String's first character is not uppercase");
  }
}

//task2
function isValidEmail(email) {
  const regexp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return regexp.test(email);
}

//task4
function replaceWords(str) {
  return str.replace(/(\w+) (\w+)/i, "$2, $1");
}

//task5
function checkBankCard(str) {
  const regexp = /[0-9]{4}-[0-9]{4}-[0-9]{4}/;
  return regexp.test(str);
}

//task6
function checkEmail(email) {
  const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regexp.test(email)) {
    console.log("Email is correct");
  } else {
    console.log("Email is incorrect");
  }
}

//task7
function checkPassword(password) {
  const regex = /^[^0-9][\w|\d]{2,10}/;
  return regex.test(password);
}
