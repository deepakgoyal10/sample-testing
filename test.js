// var s = 'javascriptloops'

// const fun=(s)=>{

//     for (let i = 0; i < s.length; i++) {
//         console.log(s[i])
//       }}

// fun(s)


// function factorial(n){
//   let x = 1
//   for(let i = n; n>1; i--){
//       x = x * n
//       n = n-1
//   }
//   return x
// }
// console.log(factorial(10))

// #################hacker rank question - function#################

// factorial using recursion method - In this example, the factorial function calls itself with a smaller value until the base case is reached, which is when n is equal to 1. At this point, the function returns 1 without calling itself again, and the call stack begins to unwind.
// function factorial(n){


//   if (n==1){
//     // This is base case
//     return 1 
//   }

//   console.log("this is value of n " + n)
//   // console.log(factorial(n))

//   // Each time the function calls itself, a new stack frame is added to the call stack.
//   a = n * factorial(n-1)
//   // When the base case is reached, the call stack starts to unwind, and the values are returned one by one. it mean the value we have stored in a will start executing
//   console.log("this is value of n after calc " + n)
//   console.log("this is value of a " + a)
//   return a

// }
// console.log(factorial(4))


// ################### Day 2 If else condition 

// function getGrade(score) {
//   let grade;

//   if (25 < score && score <= 30) {
//     grade = "A"
//   }
//   else if (20 < score ) {
//     grade = "B"
//   }
//   else if (15 < score ) {
//     grade = "C"
//   }
//   else if (10 < score) {
//     grade = "D"
//   }
//   else if (5 < score) {
//     grade = "E"
//   }
//   else if (0 < score ) {
//     grade = "F"
//   }

//   return grade;
// }


// console.log(getGrade(16))


// ########### day 2 condtional statement:  Swtich

// function getLetter(s) {
//   let letter;

//   let A = ['a','e','i','o','u']
//   let B = ['b','c','d','f','g']
//   let C = ['h', 'j', 'k', 'l', 'm']

//   let fL = s.charAt(0)

//   switch(fL){
//       // finding if first letter of s is inside A if it gets the letter it will return that letter. 
//       case A.find(e => e === fL):
//       letter = 'A'
//       break

//       case B.find(e => e === fL):
//       letter = 'B'
//       break

//       case C.find(e => e === fL):
//       letter = 'C'
//       break

//       default:
//       letter = 'D'
//   }




//   return letter;
// }





function getSecondLargest(nums) {
  nums = nums.sort(function (a, b) { return a - b; }); // sorting the array numerically with the comparison function inside
  console.log(nums)
  let maxNum = Math.max.apply(Math, nums); // Finding the max number in nums

  let secMax;
  if (nums.indexOf(maxNum) === 0) {
    // If the max number is at the beginning of the sorted array, set the second max to the second element
    secMax = nums[1];
  } else {
    secMax = nums[nums.indexOf(maxNum) - 1]; // finding the index number of max number then minus one from that index number  and you will get index number of second max
  }

  return secMax;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getSecondLargest(nums)); // Output: 9


// LOGIC BEHIND THE COMPARISON FUNCTION
      //  In the nums.sort() method, we pass a comparison function that takes two arguments (a and b) and returns a value:

      // function(a, b) {
      //   return a - b;
      // }
      // When we call nums.sort() with this comparison function, the sort() method sorts the elements of the nums array in ascending numerical order.

      // Here's an example to illustrate how the comparison function works:

      // Suppose we have the following array of numbers:

      // let nums = [10, 2, 4, 9, 5];
      // When we call nums.sort() with the comparison function, the sort() method first compares the first two elements of the array (10 and 2). It does this by calling the comparison function with the arguments 10 and 2:

      // function(10, 2) {
      //   return 10 - 2;
      // }
      // The comparison function subtracts 2 from 10, which gives 8. Since 8 is positive, the sort() method knows that 10 should come after 2 in the sorted array.

      // The sort() method continues to compare the remaining elements of the array using the same process. When it has finished comparing all the elements, the resulting sorted array is:

      // [2, 4, 5, 9, 10]
      // I hope this helps clarify how the comparison function works!