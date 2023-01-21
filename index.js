// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

const endPoint = 'https://jsonplaceholder.typicode.com/todos/1';
async function getTitle() {
  try {
    const request = await fetch(endPoint);
    const data = await request.json(); //It also returns a promise, thus await is used to get it resolved
    document.getElementById('app').innerText = data.title;
  } catch (error) {
    console.log('Error occured', error.message);
  }
}
getTitle();
