import { useState } from "react";
import react from "react";
import Img from "./img";

function Form() {
  const [formData, setFormData] = useState({});
  function inputHandler(e) {
    console.log(e.target);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }


  return (
    <div>
      <form>
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          onChange={inputHandler}
        />
        <input
          type="text"
          name="name"
          placeholder="Card Name"
          onChange={inputHandler}
        />
        <input
          type="text"
          name="Expiry"
          placeholder="MM/YY  Expiry"
          onChange={inputHandler}
        />
        <input
          type="tel"
          name="CVV"
          placeholder="CVV"
          onChange={inputHandler}
        />
        <input type="submit" />
      </form>
      <div className="Datainput">
      <h3>{formData.number}</h3>
      <h3>{formData.name}</h3>
      <h3>{formData.Expiry}</h3>
      <h3>{formData.CVV}</h3>
      <Img/>
      </div>
    </div>
  );
}
export default Form;


