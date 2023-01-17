// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F
let score = 59
if(score >=80 && score<=100){
    console.log("A grade")
}else if(score >=70 && score<=79){
    console.log("B grade")
}else if(score >=60 && score<=69){
    console.log("C grade")
}else if(score >=50 && score<=59){
    console.log("D grade")
}else if(score >=0 && score<=49){
    console.log("E grade")
}