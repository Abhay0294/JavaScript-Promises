//This function shows the error handling in promises

export function promiseError() {
  //throw new Error('Error ocurred inside function');
  return new Promise((resolve, reject) => {
    let x = 10;
    //resolve(x);
    throw new Error('Error ocurred inside promise');
  });
}

console.log(promiseError());
