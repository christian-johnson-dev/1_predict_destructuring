// CHRISTIAN JOHNSON
// 2023-04-03
// 'Predict Destructruing' Core Assignment

// ? ========== Problem One  ==========
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar); // 'Tesla'
console.log(otherRandomCar); //'Mercedes' because of first empty CSV

// ? ========== Problem TWO  ==========
const employee = {
  name: "Elon",
  age: 47,
  company: "Tesla",
};
const { name: otherName } = employee;
//Predict the output
//console.log(name); //Key 'name' is no longer defined
console.log(otherName); //Elon

// ? ========== Problem THREE  ==========
const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
};
const password = "12345"; //** This is being declared outside the object.  Password is not a key */
const { password: hashedPassword } = person; //! person does not have a key called "password" HOWEVER an UNDEFINED variable called "hashedPassword" wil be created.
//Predict the output
console.log(password); //*        "12345"
console.log(hashedPassword); //*  "undefined"

// ? ========== Problem FOUR  ==========
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers; //*                2
const [, , , second] = numbers; //*           5
const [, , , , , , , , third] = numbers; //*  2
//Predict the output
console.log(first == second); //*    false
console.log(first == third); //*     true

// ? ========== Problem FIVE  ==========
const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest; //*             'value'
const { secondKey } = lastTest; //*       [1, 5, 1, 8, 3, 3]
const [, willThisWork] = secondKey; //*   5
//Predict the output
console.log(key); //*             'value'
console.log(secondKey); //*       [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //*    1
console.log(willThisWork); //*    5
