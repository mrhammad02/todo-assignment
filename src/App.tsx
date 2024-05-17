// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const[txt,settxt] = useState('abc')
//   const[txtlist,settxtlist] = useState([])
//   return (

//     <div className="App">
//       <p>{txt}</p>
//       <input type="text" onChange={(inp)=>{
//         settxt(inp.target.value)
//       }} />
//     </div>
//   );

// }

// export default App;



import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { text } from "stream/consumers";

function App() {
  //  const[count,setcount]=useState(100)
  const [txt, settxt] = useState('abc');
  const [txtlist, setlist] = useState<any>([]);
  const del = (i: any) => {
    txtlist.splice(i, 1);
    setlist([...txtlist]);
  };
  const deletall = ()=>{
    setlist([])
  }
  const Edit = (x: any) => {
    let a = prompt("Enter a new value");
    txtlist.unshift(a)
    settxt(txtlist[0])
  };
  return (
    <div className="App">
      <p>{txt}</p>
      <input
        type="text"
        onChange={(inp) => {
          settxt(inp.target.value);
        }}
      />
      <button
        onClick={() => {
          txtlist.push(txt);
          setlist([...txtlist]);
        }}
      >
        Add
      </button>
        <button onClick={deletall}>deletall</button>
      {txtlist.map((x: any, i: any) => {
        return (
          <p key={i} className="pera">
            {x}
            <button
              onClick={(txtlist) => {
                del(i);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                Edit(x);
              }}
            >
              Edit
            </button>
          </p>
        );
      })}
    </div>

  );
}

export default App;
