import React from 'react';

/* "./" means the same directory. */

function Food(props){
  return <h1> I like {props.fav}.</h1>
}

function App() {
  return (
    <div> 
      <h1>Hello!!!!</h1>
      <Food fav="kimchi"/>
      <Food fav="라면"/>
      <Food fav="samgiopsal"/>
    </div>
    );
}

export default App;
