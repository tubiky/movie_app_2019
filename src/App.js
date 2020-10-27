import React from 'react';

/* "./" means the same directory. */

function Food({ name, picture, alter }) {
  return (
  <div>
    <h2> I like { name }.</h2>
    <img src={ picture } alt = { alter }/>
  </div>
  );
}

function Quiz({ name }) {
  return (
    <div class="nav" background-color="lightblue">
      <h1> Just testing for { name } </h1>
    </div>
  )

}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    alter: "Vegetable"
  },
  {
    id: 2,
    name: "Samgyopsal",
    image: "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    alter: "Pork"
  },
  {
    id: 3,
    name: "Beef Steak",
    image: "https://lh3.googleusercontent.com/proxy/GKwJozF4dV-4Os8Sa8mpNAlQOSgj4_OsZR3Qqz06_E5d3-WEHhsstzaB8rH442WAgBFjWJ4AFUNdP0MpY8nhqeiTdB9vQaKy35ny15O3jbZ8uqJQUksVHJA4i0rwkmkRCPH9JP32Elyh-isBNijyG1s9Upwxoam7QFblgDaaj5iCMQug4vjCHNVUfLyRl6uIK78zH6AnPLTyx6VPSZRtZUO-lmYs0ApVSZCVoJFBnq2YBV9pBOpiIcT9oDY-KXoPPgHu8PjT6rBSUJ_Mq4YfYpKw0CB70imti3d68-9raC28Ck9ejBCgNfRnRB_rovjd",
    alter: "Steak"
  }
];

function App() {
  return (
    <div> 
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} alter={ dish.alter }/>)}
      <Quiz name={ "Alex" }/>
    </div>
    );
}

export default App;
