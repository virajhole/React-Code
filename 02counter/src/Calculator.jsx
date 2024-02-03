import React, { useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Calculator = () => {
    const [selectedOperation, setSelectedOperation] = useState(''); 
    const [result, setResult] = useState('');

    const calculate = () => {
        const ip1 = parseFloat(document.querySelector('.ip1').value);
        const ip2 = parseFloat(document.querySelector('.ip2').value);

        let calculationResult;
        switch (selectedOperation) {
            case '+':
                calculationResult = ip1 + ip2;
                break;
            case '-':
                calculationResult = ip1 - ip2;
                break;
            case '*':
                calculationResult = ip1 * ip2;
                break;
            case '/':
                calculationResult = ip1 / ip2;
                break;
            default:
                calculationResult = alert(`Plz select any operation idiot 😆`);

        }

        setResult(calculationResult);
        // alert(`The result is: ${calculationResult}`);
    };

    return (
        <div>
            <input type="number" className='ip1' /> <br /><br />
            <input type="number" className='ip2' /> <br /><br />

            <DropdownButton id="dropdown-basic-button" title="Select Operation" onSelect={(eventKey) => setSelectedOperation(eventKey)}>
                <Dropdown.Item eventKey="+">+</Dropdown.Item>
                <Dropdown.Item eventKey="-">-</Dropdown.Item>
                <Dropdown.Item eventKey="*">*</Dropdown.Item>
                <Dropdown.Item eventKey="/">/</Dropdown.Item>
            </DropdownButton>
            <br /><br />

            <div>
                <Button variant="primary" onClick={calculate}>Submit</Button>
            </div>

            {result && <h1>The Calculation is: {result}</h1>}
        </div>
    );
}

export default Calculator;
