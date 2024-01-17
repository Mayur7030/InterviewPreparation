const asyncfunc = async () => {

  let first = new Promise((res, rej) => {
    setTimeout(() => {
      res("first 2000")
    }, 2000);
  })
    .then(res => console.log(res))

  let second = new Promise((res, rej) => {
    setTimeout(() => {
      res("second 2000")
    }, 1000);
  })
    .then(res => console.log(res))




  console.log("start")
  let firstone = await first
  console.log("middle")
  let secondone = await second
  console.log("stop")


}

asyncfunc()