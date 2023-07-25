import { useState } from 'react';
import './App.css';
import { ReactEx } from './react-example/ReactExample';

const App = () => {
  const [isOpened, setIsOpened] = useState(false);
  console.log('APP')
  const [inputState, setInputState] = useState('')
  return (
    <div className="App">
      <div onClick={() => setIsOpened(!isOpened)}>{isOpened ? 'закрыть' : 'открыть'}</div>
      {isOpened && <ReactEx setInputState={setInputState} inputState={inputState} />}
    </div>
  );
}

export default App;
