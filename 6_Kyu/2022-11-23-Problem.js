// 6 Kyu Problem - November 23rd 2022
// Function Composition
// Functional Programming, function of a function, .reduceRight(acc,curr,idx => ...), rest parameter, .reverse(), .forEach()

/*
Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can be combined to form a new function which first adds one and then multiplies by two, as follows:

const addOne = (a) => a + 1
const multTwo = (b) => b * 2
const addOneMultTwo = (c) => multTwo(addOne(c))

addOneMultTwo(5) // returns 12
Combining functions like this is called function composition. Functional programming libraries in Javascript such as Ramda include a generic compose function which does the heavy lifting of combining functions for you. So you could implement addOneMultTwo as follows:

const addOneMultTwo = compose(multTwo, addOne)

addOneMultTwo(5) // returns 12
A simple implementation of compose, could work as follows:

const compose = (f, g) => (a) => f(g(a))
The arguments f and g are unary functions (i.e. functions which take one argument). The problem with this compose function is that it only composes two functions. Your task is to write a compose function which can compose any number of functions together.
*/

// .reduceRight() - basically .reduce() but right to left

// rest parameters, .reverse(), .forEach()
function compose(...args) {
  return function(n){
    args.reverse().forEach(funky => n = funky(n))
    return n
  }
}

// rest parameters, .reduceRight()
const compose = (...fns) => arg => fns.reduceRight((res, fn) => fn(res), arg);


function compose(...args){
   return function(n){
      return args.reduceRight((acc,curr) => curr(acc), n)
   }
}