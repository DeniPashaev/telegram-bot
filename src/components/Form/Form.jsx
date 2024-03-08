import React, { useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("pysical");
  const {tg} = useTelegram()

  useEffect(() => {
    tg.MainButton.setParams({
        text: "Оправить данные"
    })
  }, [])

  useEffect(() => {
    if(!street || !country) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
    }
  }, [country, street])

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Vedite dannye</h3>
      <input className={"input"} 
      type="text" 
      placeholder={"country"} 
      value={country}
      onChange={onChangeCountry}
      />
      <input className={"input"}
       type="text" 
       placeholder={"street"}
       value={street}
       onChange={onChangeStreet}
       />
      <select value={subject} onChange={onChangeSubject} className={"select"}>
        <option value={"pysical"}>Физ.лицо</option>
        <option value={"legal"}>Юр.лицо</option>
      </select>
    </div>
  );
};

export default Form;
