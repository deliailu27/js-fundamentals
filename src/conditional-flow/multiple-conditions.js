// This function should return true if num is greater
// than or equal to lower AND less than or equal to upper.
// Implement this with a single condition.
function isInRange (num, lower, upper) {

  // TODO: write code in this function body to pass the tests
  if (num>=lower && num<=upper) return true 


}

console.log(isInRange(3,1,10))

// This function should return true if the passed string is equal
// to "Hello" or "Goodbye". Implement this with a single
// if statement.
function isHelloOrGoodbye (val1) {

  // TODO: write code in this function body to pass the tests
  if (val1==="Hello" || val1==="Goodbye") return true 

}
console.log("hello",isHelloOrGoodbye("Hello"))

// This function should return a string that describes the provided age value. The
// table below shows for each range of age values what string should be returned.
//
// For example, if an age of 3 is provided to the function, "Toddler" should be
// returned.
//
// Input   Output
// 0      | Baby
// 1-4    | Toddler
// 5-12   | Child
// 13-19  | Teenager
// 20+    | Adult
function getAgeDescription (age) {

  // TODO: write code in this function body to pass the tests

  if (age===0) {return "Baby";}
  else if (age<=4) {return "Toddler";}
  else if (age<=12) {return "Child";}
  else if (age<=19) {return "Teenager";}
  else {return "Adult"}
}

console.log("age",getAgeDescription(10))

module.exports = {
  a: isInRange,
  b: isHelloOrGoodbye,
  c: getAgeDescription
}
