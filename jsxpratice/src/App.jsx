import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import React, { Component } from 'react';
import Hello from './components/Hello.jsx';
import State from './components/State.jsx';
import Counter from './components/Counter.jsx';
import FormComponent from './components/FormComponent.jsx';
import ShowHide from './components/ShowHide.jsx';
import Reducer from './components/reducer.jsx';
import Score from './components/Score.jsx';
import Useeffect from './components/Useeffect.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Hello /> */}
        {/* <State />? */}
        {/* <Counter /> */}
        {/* <ShowHide /> */}
        {/* <FormComponent /> */}
        {/* <Reducer /> */}
        {/* <Score/> */}
        <Useeffect />
      </div>
    );
  }
}
export default App
