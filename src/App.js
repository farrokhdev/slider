import React, { useState, useEffect } from 'react';
import data from './data';
import { Slider } from './components/Slider';
function App() {
  const[people,setPeople]=useState(data);
  const[index,setIndex]=useState(0);

  useEffect(()=>{
    const lastIndex = people.length-1;
    if(index<0){
      setIndex(lastIndex);
    }
    if(index>lastIndex){
      setIndex(0);
    }
  },[index,people])

  useEffect(()=>{
    let slider = setInterval(()=>{
      setIndex(index+1)
    },3000);
    return (()=>{
      clearInterval(slider)
    })
  },[index])

  return (
    <section className="main">
      <div className="title">
        <h2>Slider</h2>
      </div>
      <div className="container">
        <Slider index={index} people={people} setIndex={setIndex} />
      </div>
    </section>
    );
}

export default App;
