/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName() {
  console.log("Nora");
}

printName();

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(currentyear, birth) {
  console.log(currentyear - birth);
}
printAge(2023, 1985);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name, language) {
  {
    if (language == "English") {
      console.log(`Hello ${name}`);
    } else if (language == "Spanish") {
      console.log(`Hola ${name}`);
    } else if (language == "French") {
      console.log(`Bonjour ${name}`);
    } else if (language == "Arabic") {
      console.log(`Merhaba ${name}`);
    }
  }
}
printHello("Nora", "English");
printHello("Nora", "Spanish");
printHello("Nora", "French");
printHello("Nora", "Arabic");

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(number1, number2) {
  if (number1 > number2) {
    console.log(number1);
  } else {
    console.log(number2);
  }
}

printMax(10, 20);
