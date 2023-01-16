// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".
const paragraph = 'PW Skills is the result of a continual effort to exponentially increase the employability of every Indian, irrespective of their socioeconomic status. With accessibility and affordability being the support structure of high-quality, industry-relevant courses, PW Skills aims to empower professionals and students alike to either jumpstart their careers or leverage existing skills with new, future-driven upgrades that will help them realise their full potential.';

const searchTerm = 'PW Skills';

console.log(`The index of the first "${searchTerm}" from the start is ${paragraph.indexOf(searchTerm)} and  end is ${paragraph.lastIndexOf(searchTerm)}`);
// Expected output: "The index of the first "PW Skills" from the start is 0 and  end is 260"