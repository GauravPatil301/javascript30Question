// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array
ages.sort();

//Find the min and max age
let minAge = ages[0] 
let maxAge = ages[0]
for(let i=0;i< ages.length;i++){
    if(ages[i]>maxAge){
        maxAge = ages[i]
    }
    if(ages[i]<minAge){
        minAge = ages[i]
    }
}
console.log(`Min age: ${minAge}`);
console.log(`Max age: ${maxAge}`);

// Find the median Age
let medianAge;
if(ages.length % 2 === 0){
    medianAge = (ages[ages.length / 2] + ages[ages.length/2 - 1])/2;
}else{
    medianAge = ages[(ages.length-1) / 2]
}
console.log(`Median age: ${medianAge}`);

// Find the average age
const sumAges = ages.reduce((a,b)=>a+b)
const averageAge = sumAges/ages.length;
console.log(`Average age: ${averageAge}`);

// Find the range of ages
const range = maxAge - minAge
console.log(`Range: ${range}`)

// Compare the value of (min - average) and (max - average)
const minAverageDiff = Math.abs(minAge-averageAge)
const maxAverageDiff = Math.abs(maxAge - averageAge)
console.log(`Difference between minimum age and average age: ${minAverageDiff}`)
console.log(`Difference between maximum age and average age: ${maxAverageDiff}`)