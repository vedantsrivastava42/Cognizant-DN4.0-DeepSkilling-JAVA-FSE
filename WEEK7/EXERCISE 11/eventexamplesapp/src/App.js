import React, { useState } from 'react';
import './App.css';

// CurrencyConverter Component
function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && currency) {
      if (currency.toLowerCase() === 'euro') {
        const converted = parseFloat(amount) * 84.00;
        alert(`Converting to Euro Amount is ${converted.toFixed(2)}`);
      } else {
        alert('Please enter Euro as currency');
      }
    } else {
      alert('Please enter both amount and currency');
    }
  };

  return (
    <div className="currency-converter">
      <h2 className="currency-converter-title">
        Currency Convertor!!!
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            Amount:
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            Currency:
          </label>
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            placeholder="Enter Euro"
            className="form-input"
          />
        </div>
        <button
          type="submit"
          className="submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function App() {
  const [counter, setCounter] = useState(5);

  const incrementValue = () => {
    setCounter(counter + 1);
  };

  const sayHello = () => {
    alert('Hello Member!');
  };

  const handleIncrement = () => {
    incrementValue();
    sayHello();
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const sayWelcome = (message) => {
    alert(`localhost:3000 says\n\n${message}`);
  };

  const handleOnPress = (e) => {
    alert('localhost:3000 says\n\nI was clicked');
  };

  return (
    <div className="App">
      <div className="counter-section">
        <h3 className="counter-display">{counter}</h3>
        <button 
          onClick={handleIncrement}
          className="button"
        >
          Increment
        </button>
        <button 
          onClick={handleDecrement}
          className="button"
        >
          Decrement
        </button>
        <button 
          onClick={() => sayWelcome('welcome')}
          className="button"
        >
          Say welcome
        </button>
        <button 
          onClick={handleOnPress}
          className="button"
        >
          Click on me
        </button>
      </div>
      
      <CurrencyConverter />
    </div>
  );
}

export default App;
