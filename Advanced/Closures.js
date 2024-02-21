const counter = (val) => {
  const resetVal = val;

  const increment = () => {
    return ++val;
  };
  const decrement = () => {
    return --val;
  };
  const current = () => {
    return val;
  };
  const reset = () => {
    return (val = resetVal);
  };

  return { increment, decrement, current, reset };
};

let newCounter = counter(0);

console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.decrement());
console.log(newCounter.current());
console.log(newCounter.reset());
