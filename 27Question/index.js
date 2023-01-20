// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).
for(let i=2;i<=100;i++){
    let flag =0;
    //looping through 2 to user input number
    for(let j=2;j<i;j++){
        if(i%j == 0){
            flag =1;
            break;
        }
    }
    if(i>1 && flag == 0){
        console.log(i)
    }
}