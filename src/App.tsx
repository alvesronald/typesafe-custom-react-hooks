import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useNumber } from './hooks/01-useNumber';
import useIsMounted from './hooks/02-useIsMounted';

function App() {

  const [ number, setNumber ] = useNumber(12)

  const isMoutend = useIsMounted();


  useEffect(() => {
    if(isMoutend){
      console.log('Component montado')
    }
  }, [isMoutend])

  return (
    <div className="App">
     <button onClick={() => setNumber(1)}>Number</button>
    </div>
  );
}

export default App;
