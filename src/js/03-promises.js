const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { delay, stop, amout } = event.currentTarget.elements;

  setTimeout(() => {
    for (let i = 1; i <= +amout.value; i++) {
      createPromise(position, delay)
    }
  }, +delay.value)
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
        // Reject
      }
    }, delay)
  })
}
