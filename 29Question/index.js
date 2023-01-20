// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.
const filename = prompt("Enter the filename:")
const extension = filename.substring(filename.lastIndexOf('.')+1)
console.log(`The extension of the filename is: ${extension}`)