import React, { useState } from "react";
import Button from "../common/Button";

import Input from "../common/Input";

const AddAmount = (props) => {
  let [amount, setAddAmount] = useState(0);

  const onAmountChange = (e) => {
    setAddAmount(e.target.value);
  };

  return (
    <div className={props.addAmountApp}>
      <Input
        classes={props.textbox}
        onChange={onAmountChange}
        value={amount}
      ></Input>
      <Button classes={props.button} onClick={() => props.increament(amount)}>
        Add Amount
      </Button>
      <Button
        classes={props.button + " " + props.asyncButton}
        onClick={() => props.makeAsyncCall(amount)}
      >
        Make Async Amount Call
      </Button>
    </div>
  );
};

export default AddAmount;
