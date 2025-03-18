//First Question
let str = "extravaganza";
let lastFour = str.slice(-4);
console.log(lastFour);


//Second Question
let food = "The quick fox jumped over the lazy dog";
let updatedFood = food.slice(0, 4) + "eat" + food.slice(4);
console.log(updatedFood); 

//Third Question
let story = "The quick brown fox jumps over the lazy dog";
let countingThe = (story.match(/the/gi) || []).length; 
let countingBrown = (story.match(/brown/g) || []).length;
console.log(`"the": ${countingThe}, "brown": ${countingBrown}`);

//forth Question
let inLibrary = "The pupils are reading in the library";
let onTable = "The child was sitting on the table before it fell";
let foundAre = inLibrary.includes("are");
let foundSitting = onTable.includes("sitting");
console.log(`Are found: ${foundAre}, Sitting found: ${foundSitting}`); 

//Fifth Question

// 1. UpperCase
let upperCase = "wonderful".toUpperCase();
console.log(upperCase); 

// 2. LowerCase
let lowerCase1 = "amazing".toLowerCase();
let lowerCase2 = "UndERneath".toLowerCase();
console.log(lowerCase1, lowerCase2); 

// 3. Title case
let titleCase = "A wonderful world".split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
console.log(titleCase); 