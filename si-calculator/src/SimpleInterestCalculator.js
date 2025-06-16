import React, { useState } from 'react';
import './App.css';

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState(10.25);
  const [years, setYears] = useState(1);
  const [result, setResult] = useState('');

  const compute = () => {
    if (!principal || principal <= 0) {
      alert('Please enter a valid principal amount');
      return;
    }
    const interest = (principal * years * rate) / 100;
    const year = new Date().getFullYear() + parseInt(years);
    setResult(`If you deposit ₹${principal}, at an interest rate of ${rate}%, you'll receive ₹${interest} in the year ${year}.`);
  };

  return (
    <div className="neon-bg">
      <div className="neon-box">
        <h2>🌟 Simple Interest Calculator</h2>

        <label>💰 Amount</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />

        <label>📈 Interest Rate: {rate}%</label>
        <input
          type="range"
          min="1"
          max="20"
          step="0.25"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />

        <label>📅 Number of Years</label>
        <select value={years} onChange={(e) => setYears(parseInt(e.target.value))}>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>{i + 1} Year{ i > 0 && 's' }</option>
          ))}
        </select>

        <button onClick={compute}>⚡ Compute</button>

        {result && <div className="result">{result}</div>}

        <footer>
          <a href="https://www.linkedin.com/in/rohitks1/" target="_blank" rel="noreferrer">
            © Rohit
          </a>
        </footer>
      </div>
    </div>
  );
};

export default SimpleInterestCalculator;
