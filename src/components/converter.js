import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import '../converter.css';

const RecipeMeasurementConverter = () => {
  // Declare state variables to store the input and output values
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('tablespoons');
  const [outputUnit, setOutputUnit] = useState('ml');
  const [outputValue, setOutputValue] = useState('');

  // Declare a conversion factor object to store the conversion factors for each unit
  const conversionFactors = {
    tablespoons: {
      ml: 14.7868,
      l: 0.0147868,
      g: 14.7868,
      kg: 0.0147868
    },
    teaspoons: {
      ml: 4.92892,
      l: 0.00492892,
      g: 4.92892,
      kg: 0.00492892
    },
    grams: {
      ml: 1,
      l: 0.001,
      g: 1,
      kg: 0.001
    },
    kilogram: {
      ml: 1000,
      l: 1,
      g: 1000,
      kg: 1
    },
    milliliter: {
      ml: 1,
      l: 0.001,
      g: 1,
      kg: 0.001
    },
    liter: {
      ml: 1000,
      l: 1,
      g: 1,
      kg: 0.001
    }
  };

  // Function to handle input value changes
  const handleInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle input unit changes
  const handleInputUnitChange = (event) => {
    setInputUnit(event.target.value);
  };

  // Function to handle output unit changes
  const handleOutputUnitChange = (event) => {
    setOutputUnit(event.target.value);
  };

  // Function that converts the input value to the output value
  const convert = () => {
    // Calculate the output value using the conversion factor
    const output = inputValue * conversionFactors[inputUnit][outputUnit];
    setOutputValue(output);
  };

  return (
    <>
    <div className="container">
    <div className="row converter-form">
      <div className="col-sm converter-col-1">
      <input className="form-control converter-input" type="number" value={inputValue} onChange={handleInputValueChange} />
      <select class="form-select" value={inputUnit} onChange={handleInputUnitChange}>
        <option value="tablespoons">Tablespoons</option>
        <option value="teaspoons">Teaspoons</option>
        <option value="grams">Grams</option>
        <option value="kilogram">Kilogram</option>
        <option value="liter">Liters</option>
        <option value="milliliter">Milliliters</option>
      </select>
      </div>
      <div className="col-sm">
      
      <input className="form-control converter-input converter-col-1" type="number" value={outputValue} readOnly />
      <select class="form-select" value={outputUnit} onChange={handleOutputUnitChange}>
        <option value="ml">Milliliters</option>
        <option value="l">Liters</option>
        <option value="g">Grams</option>
        <option value="kg">Kilograms</option>
      </select>
      </div>
      <div className="col converter-col">
      <button className='btn btn-primary btn-converter' onClick={convert}>Convert</button>
      </div>
      </div>
      </div>
    </>
  );
};

export default RecipeMeasurementConverter;
