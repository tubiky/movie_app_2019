import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

 /* important command
   1. npx create-react-app NAME_OF_THE_APPLICATOIN 
   2. npm start : run server
   3. npm run build : to create a production build
   4. git init
   5. git remot add origin "URL from github"
   6. git add .
   7. git commit -m "Message"
   8. git push origin master
   */

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