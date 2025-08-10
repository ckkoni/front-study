const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//回调实现

// function animate1(callback) {
//   alice1.animate(aliceTumbling, aliceTiming).addEventListener("finish", () => {
//     callback();
//   });
// }

// function animate2(callback) {
//   alice2.animate(aliceTumbling, aliceTiming).addEventListener("finish", () => {
//     callback();
//   });
// }

// function animate3(callback) {
//   alice3.animate(aliceTumbling, aliceTiming).addEventListener("finish", () => {
//     callback();
//   });
// }


// function aliceAnimate() {
//   animate1(() => {
//     animate2(() => {
//       animate3(() => {
//         console.log("finish");
//       });
//     });
//   });
// }

// aliceAnimate();

//Promise链实现

// alice1.animate(aliceTumbling,aliceTiming).finished
//   .then(() => alice2.animate(aliceTumbling,aliceTiming).finished)
//   .then(() => alice3.animate(aliceTumbling,aliceTiming).finished)
//   .catch(error => console.error("错误",error))

//async和await实现

async function aliceAnimate() {
  try {
      await alice1.animate(aliceTumbling, aliceTiming).finished;
      await alice2.animate(aliceTumbling, aliceTiming).finished;
      await alice3.animate(aliceTumbling, aliceTiming).finished;
  }
  catch (error) {
    console.error("出错了", error);
  }
}

aliceAnimate();