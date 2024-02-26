import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useNumber } from './hooks/01-useNumber';

function App() {

  const [ number, setNumber ] = useNumber(12)

  return (
    <div className="App">
     <button onClick={() => setNumber(1)}>Number</button>
    </div>
  );
}

export default App;
