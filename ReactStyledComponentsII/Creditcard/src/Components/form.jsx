import React from "react";
import { useState } from "react";



function Form() {
//   const [number, setNumber] = useState("");
//   const [name, setName] = useState("");
//   const [exp, setExpiry] = useState("");
//   const [CVV, setCVV] = useState("");
//   const [focus, setfocus] = useState("");
 const [formData,setFormData]=useState({})
 function inputHandler(e){
 
   console.log(e.target)
const {name,value}=e.target 
setFormData({...formData,[name]:value})
 }
 console.log(formData)
  return (
      
    <div>
      {/* <cards */}
        {/* number={number}
        name={name}
        xpiry={exp}
        cvc={CVV}
        focused={focus}
      /> */}

      <form >
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          onChange={()=>{inputHandler()}}
        //   value={"***"}
        //   onChange={(e) => setNumber(e.target.value)}
        //   onFocus={(e) => setfocus(e.target.name)}
        />
        <input
          type="text"
          name="name"
          placeholder="Card Name"
          onChange={inputHandler}
        //   value={name}
        // value={"anand"}
        //   onChange={(e) => setName(e.target.value)}
        //   onFocus={(e) => setfocus(e.target.name)}
        />
        <input
          type="text"
          name="Expiry"
          placeholder="MM/YY  Expiry"
          onChange={inputHandler}
        //   value={exp}
        //   onChange={(e) => setExpiry(e.target.value)}
        //   onFocus={(e) => setfocus(e.target.name)}
        />
        <input
          type="tel"
          name="CVV"
          placeholder="CVV"
          onChange={inputHandler}
        //   value={CVV}
        //   onChange={(e) => setCVV(e.target.value)}
        //   onFocus={(e) => setfocus(e.target.name)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
export default Form;
