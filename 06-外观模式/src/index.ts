const {random} = Math;

const randomRange = (min:number, max?:number) => {
  if (!max) {
    max = min;
    min = 0;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return random() * (max - min) + min;
}

console.log(randomRange(10))
console.log(randomRange(0, 10))
console.log(randomRange(10, 0))