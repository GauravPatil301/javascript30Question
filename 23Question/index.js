// 23. Write a program to check that the number given by the user is a prime number or not.
let number = 1
let i,flag = true;
if(number === 1){
    console.log(`1 is not is not prime number or composite number`)
}else{
    for(i=2;i<=number-1;i++){
        if(number%i ==0){
            flag = false;
            break;
        }
    }
    if(flag == true){
        console.log(`${number} is prime`)
    }else{
        console.log(`${number} is not prime`)
    }    
}