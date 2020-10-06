import React from 'react';
import './App.css';
import Buttons from "./Buttons";
import ControlledForm from './ControlledForm';
import Counter from "./Counter";
import StyledButtons from "./StyleButtons";

function App() {
  return (
    <div className="App">
      <Buttons />
      <Counter />
      <StyledButtons />
      <ControlledForm />
    </div>
  );
}

export default App;
