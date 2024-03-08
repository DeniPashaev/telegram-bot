import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className={"form"}>
      <h3>Vedite dannye</h3>
      <input className={"input"} type="text" placeholder={"country"} />
      <input className={"input"} type="text" placeholder={"street"} />
      <select className={"select"}>
        <option value={"pysical"}>Физ.лицо</option>
        <option value={"legal"}>Юр.лицо</option>
      </select>
    </div>
  );
};

export default Form;
