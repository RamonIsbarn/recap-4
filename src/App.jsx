import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);

  const handleAddColors = (newColor) => {
    const newColorData = [newColor, ...colors];
    setColors(newColorData);
  };

  const handleDelete = (colorId) => {
    const newColorData = colors.filter((color) => color.id !== colorId);
    setColors(newColorData);
  };
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColors} />
      {colors.map(({ id, role, hex, contrastText }) => (
        <Color
          key={id}
          hex={hex}
          role={role}
          contrastText={contrastText}
          id={id}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
}

export default App;
