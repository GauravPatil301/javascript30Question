// 18. Write a program which tells the number of days in a month, now consider leap year.
let month = 'March'
if(month === 'February'){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                console.log(`${month} ${year} has 29 days`);
            }else {
                console.log(`${month} ${year} has 28 days`);
            }
        }else{
            console.log(`${month} ${year} has 29 days`)
        }
    }else{
        console.log(`${month} ${year} has 28 days`)
    }
}else if(month === 'April' || month === 'June' || month === 'September' || month === 'November'){
    console.log(`${month} ${year} has 30 days.`)
}else {
    console.log(`${month} ${year} has 31 days.`);
}