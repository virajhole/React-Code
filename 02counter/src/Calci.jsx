import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    let calculatedResult;
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    switch (operation) {
      case '+':
        calculatedResult = parsedNum1 + parsedNum2;
        break;
      case '-':
        calculatedResult = parsedNum1 - parsedNum2;
        break;
      case '*':
        calculatedResult = parsedNum1 * parsedNum2;
        break;
      case '/':
        calculatedResult = parsedNum1 / parsedNum2;
        break;
      default:
        calculatedResult = 'Invalid operation';
    }

    setResult(calculatedResult);
    console.log(calculatedResult);
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div>Result: {result}</div>
    </div>
  );
}

export default Calculator;
