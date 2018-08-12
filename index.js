// Import stylesheets
import './style.css';
import './tests/index';
import { hello } from './src/hello';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>QUnit Starter: ${hello()}</h1>`;
