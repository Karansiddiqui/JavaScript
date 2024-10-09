// setTimeOut -> it run the function after specific time
// it is used when have to call a function after some time
// it return a id of the function which can be used to cancel the function

setTimeout(() => {
  console.log("Hello World!");
}, 2000);

// setInterval -> it run the function repeatedly after specific time

let i = 0;
const intervalId = setInterval(() => {
  console.log(`This is iteration ${i}`);
  i++;

  if (i === 5) {
    clearInterval(intervalId); // stop the interval after 5 iterations
  }
}, 1000);
