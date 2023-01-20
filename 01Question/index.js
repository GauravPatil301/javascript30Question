// 03. Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method.

// let message = 'Hello'
// let result = message.toUpperCase();
// console.log(result)

// 04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.
// let sentence = 'I am full stack developer'
// const word = 'full'
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "full" is in the sentence"


// 05. Declare a varibale and assign string value to it and then split it into an array using split() method
// const sentence = 'Once upon a time, there was a man who lived';

// const stringCopy = sentence.split();
// console.log(stringCopy);
// Expected output: Array ["Once upon a time, there was a man who lived"]


// 06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// let array = str.split(', ');
// console.log(array);

//Expected Output
// [
//   'Facebook',
//   ' Google',
//   ' Microsoft',
//   ' Apple',
//   ' IBM',
//   ' Oracle',
//   ' Amazon'
// ]

// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".
// const paragraph = 'PW Skills is the result of a continual effort to exponentially increase the employability of every Indian, irrespective of their socioeconomic status. With accessibility and affordability being the support structure of high-quality, industry-relevant courses, PW Skills aims to empower professionals and students alike to either jumpstart their careers or leverage existing skills with new, future-driven upgrades that will help them realise their full potential.';

// const searchTerm = 'PW Skills';

// console.log(`The index of the first "${searchTerm}" from the start is ${paragraph.indexOf(searchTerm)} and  end is ${paragraph.lastIndexOf(searchTerm)}`);
// Expected output: "The index of the first "PW Skills" from the start is 0 and  end is 260"

// 08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.
// const message = '   PW skills   ';

// console.log(message);
// Expected output: "   PW skills   ";

// console.log(message.trim());
// Expected output: "PW skills";

// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
// console.log(Boolean(undefined));  // true
// console.log(Boolean(0));  // true
// console.log(Boolean(NaN));  // true
//     - Write three JavaScript statement example which provide falsy value.
// console.log(Boolean(1));  // false
// console.log(Boolean([0]));  // false
// console.log(Boolean('hello'));  // false


// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3   //true
// console.log(4 > 3);  // true
// //     - 4 >= 3 // true
// console.log(4 >= 3); // true
// //     - 4 < 3 //false
// console.log(4 < 3); // false
// //     - 4 <= 3 // false
// console.log(4 <= 3); // false
// //     - 4 == 4  // true
// console.log(4 == 4); // true
// //     - 4 === 4  // true
// console.log(4 === 4); // true
// //     - 4 != 4  //false
// console.log(4 != 4); // false
// //     - 4 !== 4   // false
// console.log(4 !== 4);  // false
// //     - 4 != '4'  // false
// console.log(4 != '4'); // false
// //     - 4 == '4'  // true
// console.log(4 == '4'); // true 
// //     - 4 === '4'  // true
// console.log(4 === '4');  // false
// //     - Find the length of python and jargon and make a falsy comparison statement.
// let str1 = 'python'
// let str2 = 'jargon'
// let str1length = str1.length
// let str2length = str2.length
// console.log(str1length === [str2length]);  // false


// // 11. Use the Date object to do the following activities
// //     - What is the year today?
// let date = new Date();
// console.log(date.getFullYear());
// //     - What is the month today as a number?
// console.log(date.getMonth());
// //     - What is the date today?
// console.log(date.getDate());
// //     - What is the day today as a number?
// console.log(date.getDate());
// //     - What is the hours now?
// console.log(date.getHours())
// //     - What is the minutes now?
// console.log(date.getMinutes());
// //     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
// console.log(Math.floor(Date.now() / 1000));

// // 12. Create a human readable time format using the Date time object
// let today = new Date();
// let year = today.getFullYear();
// let month = (today.getMonth() + 1).toString().padStart(2, '0');
// let date = today.getDate().toString().padStart(2, '0');
// let hours = today.getHours().toString().padStart(2, '0');
// let minutes = today.getMinutes().toString().padStart(2, '0');
// //     - YYYY-MM-DD HH:mm
// let formattedDate = `${year}-${month}-${date} ${hours}:${minutes}`;
// console.log(formattedDate);
// //     - DD-MM-YYYY HH:mm
// let formattedDate1 = `${date}-${month}-${year} ${hours}:${minutes}`
// console.log(formattedDate1)
// //     - DD/MM/YYYY HH:mm
// let formattedDate2 = `${date}/${month}/${year} ${hours}:${minutes}`
// console.log(formattedDate2);


// // 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let age = prompt('Enter your age:');
// if(age>18){
//     console.log('You are old enough to drive');
// }else{
//     console.log(`You are not 18 year old. You need to wait ${18-age} years to turn 18.`);
// }

// // 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.
// let number= 5
// if(number%2 == 0){
//     console.log('Even Number')
// }else{
//     console.log('Odd Number')
// }

// // 15. Write a program which can give grades to students according to theirs scores:
// //     - 80-100, A
// //     - 70-89, B
// //     - 60-69, C
// //     - 50-59, D
// //     - 0-49, F
// let score = 59
// if(score >=80 && score<=100){
//     console.log("A grade")
// }else if(score >=70 && score<=79){
//     console.log("B grade")
// }else if(score >=60 && score<=69){
//     console.log("C grade")
// }else if(score >=50 && score<=59){
//     console.log("D grade")
// }else if(score >=0 && score<=49){
//     console.log("E grade")
// }

// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
// let month = 'October'
// if(month === 'September' || month === 'October' || month === 'November'){
//     console.log('The season is Autumn.')
// }else if (month === 'December' || month === 'January' || month === 'February'){
//     console.log('The season is Winter.')
// }else if (month === 'March' || month === 'April' || month === 'May'){
//     console.log('The season is Spring.')
// }else if(month === 'June' || month === 'July' || month === 'August'){
//     console.log('The season is Summer.')
// }else {
//     console.log('Invalid input.')
// }

// // 17. Write a program which tells the number of days in a month.
// let month = 'March'
// if (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December' ){
//     console.log(31+ 'days')
// }else if(month === 'April' || month === 'June' || month === 'September' || month === 'November'){
//     console.log(30 + 'days')
// }else if(month === 'February'){
//     console.log(28 + 'days')
// }   

// // 18. Write a program which tells the number of days in a month, now consider leap year.
// let month = 'March'
// if(month === 'February'){
//     if(year % 4 === 0){
//         if(year % 100 === 0){
//             if(year % 400 === 0){
//                 console.log(`${month} ${year} has 29 days`);
//             }else {
//                 console.log(`${month} ${year} has 28 days`);
//             }
//         }else{
//             console.log(`${month} ${year} has 29 days`)
//         }
//     }else{
//         console.log(`${month} ${year} has 28 days`)
//     }
// }else if(month === 'April' || month === 'June' || month === 'September' || month === 'November'){
//     console.log(`${month} ${year} has 30 days.`)
// }else {
//     console.log(`${month} ${year} has 31 days.`);
// }

// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

// // 20. In the following shopping cart add, remove, edit items
// //     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// //     - add 'Meat' in the beginning of your shopping cart if it has not been already added
// //     - add Sugar at the end of your shopping cart if it has not been already added
// //     - remove 'Honey'
// //     - modify Tea to 'Green Tea'

// let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// if(!shoppingCart.includes('Meat')){
//     shoppingCart.unshift('Meat')
// }
// if(!shoppingCart.includes('Sugar')){
//     shoppingCart.push('Sugar')
// }
// shoppingCart = shoppingCart.filter(item => item !=='Honey')
// shoppingCart = shoppingCart.map(item => item === 'Tea' ? 'Green Tea' : item);
// console.log(shoppingCart);

// // Output: ['Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar']

// // 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// let countries = ['India','Bhutan','China','Bangladesh','SriLanka'];
// if(countries.includes('Ethiopia')){
//     console.log('ETHIOPIA');
// }else{
//     countries.push('Ethiopia')
//     console.log(countries);
// }

// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// //Sort the array
// ages.sort();

// //Find the min and max age
// let minAge = ages[0] 
// let maxAge = ages[0]
// for(let i=0;i< ages.length;i++){
//     if(ages[i]>maxAge){
//         maxAge = ages[i]
//     }
//     if(ages[i]<minAge){
//         minAge = ages[i]
//     }
// }
// console.log(`Min age: ${minAge}`);
// console.log(`Max age: ${maxAge}`);

// // Find the median Age
// let medianAge;
// if(ages.length % 2 === 0){
//     medianAge = (ages[ages.length / 2] + ages[ages.length/2 - 1])/2;
// }else{
//     medianAge = ages[(ages.length-1) / 2]
// }
// console.log(`Median age: ${medianAge}`);

// // Find the average age
// const sumAges = ages.reduce((a,b)=>a+b)
// const averageAge = sumAges/ages.length;
// console.log(`Average age: ${averageAge}`);

// // Find the range of ages
// const range = maxAge - minAge
// console.log(`Range: ${range}`)

// // Compare the value of (min - average) and (max - average)
// const minAverageDiff = Math.abs(minAge-averageAge)
// const maxAverageDiff = Math.abs(maxAge - averageAge)
// console.log(`Difference between minimum age and average age: ${minAverageDiff}`)
// console.log(`Difference between maximum age and average age: ${maxAverageDiff}`)

// // 23. Write a program to check that the number given by the user is a prime number or not.
// let number = 1
// let i,flag = true;
// if(number === 1){
//     console.log(`1 is not is not prime number or composite number`)
// }else{
//     for(i=2;i<=number-1;i++){
//         if(number%i ==0){
//             flag = false;
//             break;
//         }
//     }
//     if(flag == true){
//         console.log(`${number} is prime`)
//     }else{
//         console.log(`${number} is not prime`)
//     }    
// }

// // 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
// const even = []
// const odd = []
// for(let i=0 ;i<= 100;i++){
//     if(i%2 ==0){
//         even.push(i)
//     }else{
//         odd.push(i)
//     }
// }
// console.log(`Even numbers between 0 to 100: ${even}`)
// console.log(`Odd numbers between 0 to 100 ${odd}`)

// // 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// //     - The same groups apply to both men and women.
// //     - Underweight: BMI is less than 18.5
// //     - Normal weight: BMI is 18.5 to 24.9
// //     - Overweight: BMI is 25 to 29.9
// //     - Obese: BMI is 30 or more
// function calculateBMI(weight,height) {
//     const bmi = weight/(height*height)
//     if(bmi>18.5){
//         return "You are underweight."
//     }else if(bmi>= 18.5 && bmi>= 24.9){
//         return 'You have a normal weight.'
//     }else if(bmi>= 25 && bmi>=29.9){
//         return 'You are overweight'
//     }else if(bmi>= 30){
//         return 'You are obese.'
//     }
// }
// console.log(calculateBMI(75,1.7)) // The first argument is weight in kg and second is height in meter

// 26. Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
// 	If the number given by the user is 2 then the output should look like this-
// 	2 * 1 = 2
// 	2 * 2 = 4
// 	2 * 3 = 6 and so on till 2 * 10 = 20.
// const number = prompt("Enter a number:");
// let i = 1;
// while (i <= 10) {
//   console.log(`${number} * ${i} = ${number * i}`);
//   i++;
// }

// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).
// for(let i=2;i<=100;i++){
//     let flag =0;
//     //looping through 2 to user input number
//     for(let j=2;j<i;j++){
//         if(i%j == 0){
//             flag =1;
//             break;
//         }
//     }
//     if(i>1 && flag == 0){
//         console.log(i)
//     }
// }

// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
// let rows=3;
// let variable = 1;
// let pattern = "";
// for(let n=1;n<=rows;n++){
//     for(let space =0;space<=rows-n;space++){
//         pattern+=" ";
//     }
//     for(let num=0;num<n;num++){
//         pattern+="*"
//     }
//     pattern+="\n";
// }
// console.log(pattern)	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// for(let n=1;n<=rows;n++){
//     for(let num=1;num<=5;num++){
//         pattern +="*"
//     }
//     pattern +='\n'
// }
// console.log(pattern);
// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****
// for(let n=1;n<=rows;n++){
//     for(let space=1;space <= rows -n; space++){
//         pattern += ' '
//     }
//     for(let num =1 ;num<= 2 * n -1;num++){
//         pattern += "*"
//     }
//     pattern +='\n'
// }
// console.log(pattern)

// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.
// const filename = 'notes.txt'
// const extension = filename.substring(filename.lastIndexOf('.')+1)
// console.log(`The extension of the filename is: ${extension}`)

// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.
// const calculator = {
//     add: function (num1,num2) {
//         return num1 + num2;
//     },
//     subtract: function (num1,num2) {
//         return num1 -num2;
//     },
//     multiply: function (num1,num2) {
//         return num1 * num2;
//     },
//     division: function (num1,num2) {
//         return num1/num2
//     }
// }
// const num1 = parseFloat(prompt("Enter the first number: "))
// const num2 = parseFloat(prompt("Enter the second number: "))
// const operation = prompt("Enter operation (+ , - , * , / )")
// switch (operation) {
//     case "+":
//         console.log(`The result is: ${calculator.add(num1,num2)}`);
//         break;
//     case "-":
//         console.log(`The result is: ${calculator.subtract(num1,num2)}`);
//         break;    
//     case "*":
//         console.log(`The result is: ${calculator.multiply(num1,num2)}`);
//         break;
//     case "/":
//         console.log(`The result is: ${calculator.division(num1,num2)}`);
//         break;        
//     default:
//         console.log("Invalid operation");
//         break;
// }