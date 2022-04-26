
import "./App.css";
import { useState,  useRef } from "react";

function App() {
  const [counter, counterstart] = useState(0);
  const C = useRef(null);
  const start = useRef(null);
  const stop = useRef(null);

 

  function timerStart() {
    C.current = setInterval(() => {
      counterstart((num) => {
        return num + 1;
        
      });
    }, 1000);
  }

  if (counter == stop.current) {
    
    clearInterval(C.current);
  }

  
  return (
    <div className="App">
    < >
      <div>{counter%2==0?"":"hello"}</div>

      <input type="number" id="start"  placeholder="START"
      value={counter}
        onChange={(event) => counterstart(event.target.value)}
        
      />



       
      
      <input type="number" id="stop"  placeholder="STOP"
      
      
      // value={counter}
      //   onChange={(event) => counterstart(event.target.value)}
      />

      <button 
        onClick={() => {
             timerStart();
          start.current =+document.getElementById("start").value
          
          stop.current =+document.getElementById("stop").value;
        
          counterstart(start.current);
       

     
        }}
        
      >
        start timer
      </button>
    </>
    </div>
  );
}

export default App;
