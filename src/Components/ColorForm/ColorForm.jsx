import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({ onAddColor }) {
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
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="role">Role</label>
        <br />
        <input
          id="role"
          name="role"
          type="text"
          placeholder="eg. some color"
        ></input>
        <br />
        <ColorInput label="Hex" id="hex" placeholder="eg. #123456" />
        <ColorInput
          label="Contrast Text"
          id="contrastText"
          placeholder="eg. #ffffff"
        />
        <button type="submit">ADD COLOR</button>
      </form>
    </>
  );
}
