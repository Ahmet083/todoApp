
import React, { useState, useEffect } from "react";


function App() {
  const [count, setCount] = useState(2);
  const [someState, setSomeState] = useState(false)

  useEffect(() =>{
    console.log("useeffect ici")},[count]);

   useEffect(() =>{
    console.log("useeffect ici someState");
   },[someState]);

  return (
    <div>
    <h1>{count}</h1>
   
    <button onClick={() => setCount( count + 6)} > Arttir</button>
    <button onClick={() => setCount( count - 3)} > Azalt</button>
    <button onClick={() => setSomeState(!someState)}>Change SomeState</button>
    <hr></hr>


    
    </div>
  );
}

export default App;
