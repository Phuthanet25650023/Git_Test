import { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    console.log("TEST")
    setUpdated(message);
  };

  return (
    <div>
      <table>
        <tr>
         {/* Stop :  <input mtype="text" id="Stop" name="Stop" onChange={handleChange}  /> */}
      Start : <input mtype="text" id="Start" name="Start" onChange={handleChange}  /> 
      Stop :  <input mtype="text" id="Stop" name="Stop" onChange={handleChange}  />
      <button onClick={handleClick}> Submit </button>

      <h2>Message: {message}</h2>

      <h2>Updated: {updated}</h2>
        </tr>
        </table>
     

     
    </div>
  );
}