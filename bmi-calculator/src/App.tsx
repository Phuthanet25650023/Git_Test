import * as React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [name, value] = event.target;
    if (name === "weight") setWeight(Number(value));
    else if (name === "height") setHeight(Number(value));
  };

  const calculateBmi = () => {
    const bmi = weight / (height / 100) ** 2;
    setBmi(bmi);
  };

  const checkBmiResult = () => {
    if (bmi === 0) return "-";
    else if (bmi < 18.5) return "ผอม";
    else if (bmi < 25) return "ดี";
    else if (bmi < 30) return "อ้วน 1";
    else if (bmi < 35) return "อ้วน 2";
    else if (bmi >= 35) return "อ้วน 3";
  };

  const getResultClass = () => {
    if (bmi < 18.5) return "gray";
    else if (bmi < 22.9) return "green";
    else if (bmi < 24.9) return "yellow";
    else return "red";
  };

  return (
    <div classname="bmi-app">
      <h1 classname="title">BMI Calculator</h1>
      <p classname="subtitle">โปรแกรมคำนวณดัชนีมวลกาย</p>
      <label htmlFor="weight">น้ำหนัก (Kg)</label>
      <input type="number" name="weight" onChange={handleOnchange} />
      <h1></h1>
      <label htmlFor="weight">ส่วนสูง (cm)</label>
      <input type="number" name="height" onChange={handleOnchange} />
      <h1></h1>
      <button type="button" onClick={calculateBmi}>
        คำนวณ
      </button>
      <div className="result">
        <p>ค่า BMI คือ :{bmi}</p>
        <p>ผลลัพธ์</p>
        <p className={getResultClass()}>{checkBmiResult()}</p>
      </div>
      <hr />
    </div>
  );
}
export default App;
