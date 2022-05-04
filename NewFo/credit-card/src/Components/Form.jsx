import { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";

import Cards from "react-credit-cards";

function Form() {
  // const [formData, setFormData] = useState({});
  // function inputHandler(e) {
  //   console.log(e.target);
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // }
  const [number, inputHandler] = useState("");

  const [name, inputName] = useState("");

  const [expiry, inputexp] = useState("");

  const [cvv, inputCvv] = useState("");

  const [focus, inputFocus] = useState("");

  return (
    <div className="cardcredit">
      <form className="Forms">
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          onChange={(e) => {
            inputHandler(e.target.value);
          }}
        />
        <input
          type="text"
          name="name"
          placeholder="Card Name"
          onChange={(e) => {
            inputName(e.target.value);
          }}
        />
        <input
          type="text"
          name="Expiry"
          placeholder="MM/YY  Expiry"
          onChange={(e) => {
            inputexp(e.target.value);
          }}
        />
        <input
          type="tel"
          name="CVV"
          placeholder="CVV"
          onChange={(e) => {
            inputCvv(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
      <Cards
        name={name}
        number={number}
        expiry={expiry}
        cvv={cvv}
        focused={focus}
      />
    </div>
  );
}
export default Form;
