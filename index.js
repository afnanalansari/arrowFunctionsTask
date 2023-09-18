// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const nm = (name) => `Hello ${name}!`;
console.log(nm('berry'));


// Q2) Write a simple arrow function that takes two parameters and returns their sum.
const sum = (a, b)=> a+b;
console.log(sum(1,5)); 

// Q3) Write a simple arrow function that squares a number.
const sqr = c => c**2; //exponentiation(**) is similar to Math.pow() but uses BigInit
console.log(sqr(4)); 


// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const array = ar => {   //first try
    let index = 0;
    ar.forEach(el => {
        ar[index] = el**2;
        index++;});
        return ar;
};
const array2 = arr => arr.map(el => el**2) //better :)
console.log(array2([1,2,3]));


