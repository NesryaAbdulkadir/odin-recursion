function fibs(number) {
  let fib = [0, 1];
  for (let i = 2; i < number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib.slice(0, number));
}
fibs(2);
