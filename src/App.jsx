import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("localData", {
    defaultValue: initialColors,
  });

  const handleAddColors = (newColor) => {
    newColor.id = Math.random();
    const newColorData = [newColor, ...colors];
    setColors(newColorData);
  };

  const handleDelete = (colorId) => {
    const newColorData = colors.filter((color) => color.id !== colorId);
    setColors(newColorData);
  };

  const handleEdit = (newColor) => {
    const newColorData = colors.map((color) =>
      color.id === newColor.id ? newColor : color,
    );
    setColors(newColorData);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm
        initialRole={"some color"}
        initialHex={"#123456"}
        initialContrast={"#ffffff"}
        onAddColor={handleAddColors}
        buttonText={"ADD COLOR"}
      />
      <div className="color-container">
        {colors.length === 0 ? (
          <p>No colors.. start by adding one!</p>
        ) : (
          colors.map(({ id, role, hex, contrastText }) => (
            <Color
              key={id}
              hex={hex}
              role={role}
              contrastText={contrastText}
              id={id}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
