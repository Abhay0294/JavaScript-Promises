// Import stylesheets
import './style.css';
import { printSquare } from './component/promises/number-square';
import { basicPromise } from './component/promises/promise-structure';

const appDiv = document.getElementById('app');

//Below are the two ways by we can resolve a promise
printSquare(2)
  .then((data) => {
    console.log('Square Of Number', data);
  })

// (async () => {
//   console.log('Square Of Number', await printSquare(2));
// })();

basicPromise()
  .then((data) => {
    console.log('Basic Promise...', data);
  })
  .catch((error) => {
    console.log('Error Occured>>>', error);
  });
