import { useState } from "react";
import react from "react";

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
      <h1>{formData.number}</h1>
      <h1>{formData.name}</h1>
      <h1>{formData.Expiry}</h1>
      <h1>{formData.CVV}</h1>
    </div>
  );
}
export default Form;


