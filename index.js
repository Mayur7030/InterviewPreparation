// let count = 0;

// function increment() {
//   count += 1;
//   return console.log(count);
// }
// count = 99

// increment();
// increment();
// increment();

function increment() {
  let count = 0;
  let clouser = () => {
    count += 1;
    return count;
  };
  // console.log(count)
  return clouser;
}
console.log()

increment();
increment();
increment();
