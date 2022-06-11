// 7 Kyu Problem - June 10th 2022
// Predict your age!

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8) {
    return Math.floor(Math.sqrt(age1**2 + age2**2 + age3**2 + age4**2 + age5**2 + age6**2 + age7**2 + age8**2)/2);
  }

//Alternative Solution
function predictAge(...age){
    let ans = [...age]
    return Math.floor(Math.sqrt(ans.map(num => num * num).reduce((acc,curr)=>acc+curr))/2)
}

//Alternative Solution
// using rest parameters and then spread syntax
const predictAge = (...ages) => Math.floor(Math.hypot(...ages) / 2)