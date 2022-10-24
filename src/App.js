import React from 'react';
import {useState} from 'react';


function App() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const click1 = e=> {
    setfirstName(e.target.value);

  }

    const click2 = e=> {
      setlastName(e.target.value);
  }

  return (
  <>
    <form>
      <input type="text"value={firstName} placeholder="firstName"onChange={click1}></input>
      <input type="text"value={lastName} placeholder="lastName"onChange={click2}></input>
      <h1>firstname:{firstName}</h1>
      <h1>lastLName:{lastName}</h1>

    </form>
  </>
  );

  }

export default App;
