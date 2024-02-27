import { useEffect } from 'react';
import './App.css';
import { useNumber } from './hooks/01-useNumber';
import useIsMounted from './hooks/02-useIsMounted';
import useDebouncedValue from './hooks/04-useDebouncedValue';
import { usePreviousValue } from './hooks/05-usePreviousValue';

function App() {
  const [number, setNumber] = useNumber(12)
  // const debouncedValue = useDebouncedValue(number, 4000)
  const isMoutend = useIsMounted();
  const previousValue = usePreviousValue(number);

  useEffect(() => {
    if(isMoutend){
      console.log('Component montado')
    }
  }, [isMoutend])

  return (
    <div className="App">
      <button onClick={() => setNumber(prevState => prevState + 1)}>
        Number
      </button>
      <p>
      previousValue -  {previousValue}
      </p>
      <p>
        RealtimeValue -  {number}
      </p>
    </div>
  );
}

export default App;