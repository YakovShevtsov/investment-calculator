import { useState } from "react";

export default function Input({ label }) {
  const [inputValue, setInputValue] = useState("");

  function changeHandler(event) {
    setInputValue(event.target.value);
  }

  return (
    <p>
      <label>{label}</label>
      <input
        type="text"
        value={inputValue}
        onChange={changeHandler}
      />
    </p>
  );
}
