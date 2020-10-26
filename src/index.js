import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

 /* App in line 9 is a component. It is related to function App() in App.js*/
 /* This combination of Java Script and HTML is called JSX, which is only specific
 in React. */

 /* Whenever you make a component you need to "import React from 'react';" */

 /* React application can render only ONE COMPONENT at a time. */

ReactDOM.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
);