// This function should accept a boolean value and return the string
// "Well done, you passed!" if the value is true, or "Sorry, try again"
// if the value is false.
function getResult (didPass) {

  // TODO: write code in this function body to pass the tests
  
  if (didPass<60) return("Sorry, try again")
  else return ("Well done, you passed!")

}

console.log('pass',getResult(60))
console.log('notPass',getResult(59))

module.exports = {
  a: getResult
}
