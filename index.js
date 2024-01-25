// // const url = "https://jsonplaceholder.typicode.com/todos/1";

// // // promise
// // // const promise = new Promise((res, rej) => {
// // //   fetch(url)
// // //     .then((res) => res.json())
// // //     .then((data) => {
// // //       res(data);
// // //     });
// // // });

// // // promise
// // //   .then((res) => console.log("successfully",res))
// // //   .catch((error) => {
// // //     rej(error);
// // //   });

// // // callback
// // // const outerFunction = () => {
// // //   fetch(url)
// // //     .then((res, rej) => {
// // //       if (!res.ok) {
// // //         throw new Error`error: ${res.ok}`();
// // //       }
// // //       return res.json();
// // //     })
// // //     .then((data) => {
// // //       innerFunction(null, data);
// // //     })
// // //     .catch((error) => {
// // //       innerFunction(error, null);
// // //     });
// // // };

// // // const innerFunction = (error, result) => {
// // //   if (error) {
// // //     console.log(error, "error");
// // //   } else if (result) {
// // //     console.log("successfully", result);
// // //   }
// // // };

// // // outerFunction(url)

// // const getUser = (user) => {
// //  return new Promise((res, rej) => {
// //     console.log("getting user from user");
// //     setTimeout(() => {
// //       res({ user: user, userId: "999" });
// //     }, 1000);
// //   });
// // };

// // const getservices = (user) => {
// //  return new Promise((res, rej) => {
// //     console.log(`getting services for ${user.userId} from API`);
// //     setTimeout(() => {
// //       res(["email", "vpn", "cdn"]);
// //     }, 2000);
// //   });
// // };

// // const getServiceCost = (services) => {
// //  return new Promise((res, rej) => {
// //     console.log(`total cost is ${services}`);
// //     setTimeout(() => {
// //       res(services.length * 100);
// //     }, 4000);
// //   });
// // };

// // getUser(100)
// // .then(getservices)
// // .then(getServiceCost)

// const plus = document.getElementById("plus");
// let num = document.getElementById("num");
// const min = document.getElementById("min");

// const handlePlus =()=>{
//   let current = parseInt(num.innerHTML,10)
//   console.log(num.innerHTML)
//   num.innerHTML = current +1
//   console.log(num.innerHTML)
// }

// const number = ()=>{
//   let current = parseInt(num.innerHTML,10)
//   num.innerHTML =99
// }

// // plus.addEventListener("click", () => {
// //   console.log(num,"num")
// //   return num + 1;
// // });


const closure =()=>{
  let num=1
  function add(){
    console.log(num)
  }
  num++
  return add()
}

closure()

window.document.getElementById(
)

window.alert()
