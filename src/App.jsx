import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  const clear = () => {
    setResult('');
  }

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={result} />
      </div>
      
      <div className="keypad">
        <button className="key" name="1" onClick={handleClick}>1</button>
        <button className="key" name="2" onClick={handleClick}>2</button>
        <button className="key" name="3" onClick={handleClick}>3</button>
        <button className="key operator" name="+" onClick={handleClick}>+</button>
        <button className="key" name="4" onClick={handleClick}>4</button>
        <button className="key" name="5" onClick={handleClick}>5</button>
        <button className="key" name="6" onClick={handleClick}>6</button>
        <button className="key operator" name="-" onClick={handleClick}>-</button>
        <button className="key" name="7" onClick={handleClick}>7</button>
        <button className="key" name="8" onClick={handleClick}>8</button>
        <button className="key" name="9" onClick={handleClick}>9</button>
        <button className="key operator" name="*" onClick={handleClick}>x</button>
        <button className="key" name="0" onClick={handleClick}>0</button>
        <button className="key" name="." onClick={handleClick}>.</button>
        <button className="key operator" name="/" onClick={handleClick}>/</button>
        <button className="key" onClick={clear}>Clear</button>
        <button className="key operator" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;