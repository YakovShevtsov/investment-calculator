import { useState } from "react";

export default function Input({ label, onGetValues, value, ...props }) {
  const [inputValue, setInputValue] = useState(value);

  function changeHandler(event) {
    setInputValue(event.target.value);
    onGetValues(event.target.id, event.target.value);
  }

  return (
    <p>
      <label>{label}</label>
      <input
        {...props}
        onChange={changeHandler}
        value={inputValue}
      />
    </p>
  );
}
