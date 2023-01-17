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
// let month = 'September'
// if(month === )

// 17. Write a program which tells the number of days in a month.

// 18. Write a program which tells the number of days in a month, now consider leap year.

// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

// 23. Write a program to check that the number given by the user is a prime number or not.

// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

// 26. Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
// 	If the number given by the user is 2 then the output should look like this-
// 	2 * 1 = 2
// 	2 * 2 = 4
// 	2 * 3 = 6 and so on till 2 * 10 = 20.

// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//  	   *****

// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.
