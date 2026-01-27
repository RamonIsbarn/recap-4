import { useState } from "react";

export default function ColorInput({ label, id, initialValue }) {
  const [input, setInput] = useState(initialValue);
  function handleInput(event) {
    setInput(event.target.value);
  }
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        onChange={handleInput}
        id={id}
        name={id}
        value={input}
        type="text"
      ></input>
      <input onChange={handleInput} value={input} type="color"></input>
      <br />
    </>
  );
}
