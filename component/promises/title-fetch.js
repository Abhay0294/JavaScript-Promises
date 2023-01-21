//This is a simple promise example showing data fetch as title and updating it to the UI

const endPoint = 'https://jsonplaceholder.typicode.com/todos/1';
export async function getTitle() {
  try {
    const request = await fetch(endPoint);
    const data = await request.json(); //It also returns a promise, thus await is used to get it resolved
    document.getElementById('app').innerText = data.title;
  } catch (error) {
    console.log('Error occured', error.message);
  }
}
getTitle();
