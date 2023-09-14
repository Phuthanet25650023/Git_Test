import { useState } from "react";

import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

 

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "weight") {
      setWeight(Number(value));
    } else if (name === "height") {
      setHeight(Number(value));
    }
  };

  const calculateBmi = () => {
    // const bmi = weight / ((height / 100) * (height / 100))

    const bmi = weight / (height / 100) ** 2;
    setBmi(bmi);
  };

  const checkBmiResult = () => {
    if (bmi === 0) return "-";
    if (bmi < 18.5) return "อยู่ในเกณฑ์น้ำหนักน้อย / โครตผอม";
    if (bmi < 20) return "อยู่ในเกณฑ์น้ำหนักน้อย / ผอม";
    if (bmi < 25) return "อยู่ในเกณฑ์ปกติ (สุขภาพดี)";
    if (bmi < 30) return "อยู่ในเกณฑ์ท้วม / โรคอ้วนระดับ 1";
    if (bmi < 35) return "อยู่ในเกณฑ์อ้วน / โรคอ้วนระดับ 2";
    if (bmi >= 35) return "อยู่ในเกณฑ์อ้วนมาก / โรคอ้วนระดับ 3";
  };

  const getResultClass = () => {
    if (bmi < 18.5) return "gray";
    if (bmi < 22.9) return "green";
    if (bmi < 24.9) return "yellow";
    return "red";
  };

const add = (a,b)=> a+b;
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

const [rating, setRating] = useState(7);
const [text, setText] = useState("This is an example of a feedback item");

const handleClick = () => {
  setRating(10);
  setText("Phuthanet Mekpayom");
};

const handleClick1 = () => {
  setRating(7);
  setText("This is an example of a feedback item");
};

  return (
    <div className="bmi-app">
      <table>
        <tr>
          <p> {rating} {text} {doubledNumbers} {add(5,10)}</p>
            <h1 className="title">BMI Calculator</h1>
            <button type="button" onClick={handleClick}>TEST</button>
            <button type="button" onClick={handleClick1}>TEST2</button>


            <p className="subtitle">โปรแกรมคำนวณค่าดัชนีมวลกาย - BMI</p>
         
        </tr>
        <tr>
         
            <label htmlFor="weight">น้ำหนัก (kg)</label>
            <input type="number" name="weight" onChange={handleOnChange} />
         
        </tr>
        <tr>
         
            <label htmlFor="height">ส่วนสูง (cm)</label>
            <input type="number" name="height" onChange={handleOnChange} />
            
        
        </tr>
      </table>

      <button type="button" onClick={calculateBmi}>
        คำนวณ
      </button>

      <div className="result">
        <p>ค่า BMI คือ: {bmi}</p>
        <p>ผลลัพธ์</p>
        <p className={getResultClass()}>{checkBmiResult()}</p>
      </div>
      <hr />
    </div>
  );
}

export default App;
