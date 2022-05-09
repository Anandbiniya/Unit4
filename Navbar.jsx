import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navgate = useNavigate();
  return (
    <div
      style={{
        width:"60%",
        margin:"auto",
        backgroundColor:"indigo",
        marginBottom: "10px",
        color: "black",
        display:"grid",
       gridTemplateColumns:"repeat(3,1fr)",
        gap: "5px",
        height:"50px",
        color: "red",
        fontSize:"50px",
      

      
       
      
      }}
    >
     
        <Link to="/home">Home</Link>
   
     
        <Link to="/about"> About</Link>
   
      <div>
        <button onClick={() =>navgate("/Login")}>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
