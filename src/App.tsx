import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useNumber } from './hooks/01-useNumber';
import useIsMounted from './hooks/02-useIsMounted';
import useDebouncedValue from './hooks/04-useDebouncedValue';

function App() {

  const [ number, setNumber ] = useNumber(12)

  const debouncedValue = useDebouncedValue(number)

  const isMoutend = useIsMounted();


  useEffect(() => {
    if(isMoutend){
      console.log('Component montado')
    }
  }, [isMoutend])

  return (
    <div className="App">
     <button onClick={() => setNumber(prevState => prevState + 1)}>Number</button>
     <p>
      DebouncedValue -  {debouncedValue}
     </p>
     <p>
      Number -  {number}
     </p>
    </div>
  );
}

export default App;
