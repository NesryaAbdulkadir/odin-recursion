function fibs(number) {
  let fib = [0, 1];
  for (let i = 2; i < number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib.slice(0, number));
}
fibs(20);

function fibsRec(number) {
  if (number < 2) return number;
  return fibsRec(number - 1) + fibsRec(number - 2);
}

console.log(fibsRec(10));
