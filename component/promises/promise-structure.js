//This is simple function explianing the basics of promise

export function basicPromise() {
  const samplePromise = new Promise((resolve, reject) => {
    let x = 5;
    //resolve(x); //Here x will be passed to the immediate .then()
    reject(x); //Here x will be passed to the .catch()
  });
  return samplePromise;
}
