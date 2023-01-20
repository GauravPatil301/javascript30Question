// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

let rows=3;
let variable = 1;
let pattern = "";
for(let n=1;n<=rows;n++){
    for(let space =0;space<=rows-n;space++){
        pattern+=" ";
    }
    for(let num=0;num<n;num++){
        pattern+="*"
    }
    pattern+="\n";
}
console.log(pattern)	

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// let rows=3;
// let pattern = "";
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

// let rows=3;
// let pattern = "";
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
