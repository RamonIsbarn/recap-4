import ColorInput from "../ColorInput/ColorInput";
import { useState } from "react";

export default function ColorForm({
  onAddColor,
  initialRole,
  initialHex,
  initialContrast,
  buttonText,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const newColor = {
      id: Math.random(),
      role: event.target.elements.role.value,
      hex: event.target.elements.hex.value,
      contrastText: event.target.elements.contrastText.value,
    };
    onAddColor(newColor);
  }

  const [input, setInput] = useState(initialRole);
  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="role">Role</label>
        <br />
        <input
          onChange={handleInput}
          id="role"
          name="role"
          type="text"
          value={input}
        ></input>
        <br />
        <ColorInput label="Hex" id="hex" initialValue={initialHex} />
        <ColorInput
          label="Contrast Text"
          id="contrastText"
          initialValue={initialContrast}
        />
        <button type="submit">{buttonText}</button>
      </form>
    </>
  );
}
