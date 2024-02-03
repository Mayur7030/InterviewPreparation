function outer() {
  let a = 10;
  let  inner =()=> {
    let a = 20;
    console.log(a);
  };
  return inner
}
outer();

// console.log(a)