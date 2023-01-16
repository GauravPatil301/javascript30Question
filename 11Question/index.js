// 11. Use the Date object to do the following activities
//     - What is the year today?
let date = new Date();
console.log(date.getFullYear());
//     - What is the month today as a number?
console.log(date.getMonth());
//     - What is the date today?
console.log(date.getDate());
//     - What is the day today as a number?
console.log(date.getDate());
//     - What is the hours now?
console.log(date.getHours())
//     - What is the minutes now?
console.log(date.getMinutes());
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Math.floor(Date.now() / 1000));