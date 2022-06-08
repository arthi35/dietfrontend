import { useState } from "react";


export function BMI() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');



  let calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please Enter a Valid weight and height');
    } else {
      let bmi = (weight / (height * height) * 703);
      setBmi(bmi.toFixed(1));
      if (bmi < 25) {
        setMessage('You are Ectomorphic(Lean body mass)');
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are Mesomorphic(Normal body mass)');
      } else {
        setMessage('You are Endomorphic(Overweight)');
      }
    }

  };

  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
      imgSrc = require('../src/assets/underweight.png');
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../src/assets/healthyweight.png');
    } else {
      imgSrc = require('../src/assets/overweight.png');
    }
  }

  let reload = () => {
    window.location.reload();
  };


  return (
    <div className='appbmi'>
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(lbs)</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)} />
          </div>
          <div>
            <label>Height(cm)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
        </form>
        <div className='center'>
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>
        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}
