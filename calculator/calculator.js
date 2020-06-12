module.exports = {
  add,
};


function add(a = 0, b = 0) {
  if(isNumber(a) && isNumber(b)){
    return a + b;
  } else {
    throw new Error('Both arguments need to be numbers');
  }
}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
// Start testing with "low hanging fruit" --> happy path (your basic assumptions), pure functions, etc.
// Check for invalid input
// Then move to edge cases

// Automated testing is better because it is unbiased and can catch errors that the author of the code might not catch. 
// Automated testing will also provide a safety net against regressions (when working code suddenly stops working) 