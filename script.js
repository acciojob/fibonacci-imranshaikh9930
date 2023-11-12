function fibonacci(num) {
// your code here

	if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    let a = 0;
    let b = 1;

    for (let i = 3; i <= num; i++) {
      let next = a + b;
      a = b;
      b = next;
    }

    return b;
  } 
}

module.exports = fibonacci;
