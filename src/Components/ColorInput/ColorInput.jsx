import { useState } from "react";

export default function ColorInput({ label, id, placeholder }) {
  const [input, setInput] = useState("");
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
        placeholder={placeholder}
      ></input>
      <input onChange={handleInput} value={input} type="color"></input>
      <br />
    </>
  );
}
