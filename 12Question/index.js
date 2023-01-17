// 12. Create a human readable time format using the Date time object
let today = new Date();
let year = today.getFullYear();
let month = (today.getMonth() + 1).toString().padStart(2, '0');
let date = today.getDate().toString().padStart(2, '0');
let hours = today.getHours().toString().padStart(2, '0');
let minutes = today.getMinutes().toString().padStart(2, '0');
//     - YYYY-MM-DD HH:mm
let formattedDate = `${year}-${month}-${date} ${hours}:${minutes}`;
console.log(formattedDate);
//     - DD-MM-YYYY HH:mm
let formattedDate1 = `${date}-${month}-${year} ${hours}:${minutes}`
console.log(formattedDate1)
//     - DD/MM/YYYY HH:mm
let formattedDate2 = `${date}/${month}/${year} ${hours}:${minutes}`
console.log(formattedDate2);