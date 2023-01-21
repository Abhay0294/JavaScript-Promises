//This function that takes a number as an argument and returns a promise that resolves to the square of that number after 2 seconds using async-await.

export async function printSquare(number) {
  try {
    let num = number;
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => resolve(num * num), 2000);
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
