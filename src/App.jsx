import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      {initialColors.map(({ id, role, hex, contrastText }) => (
        <Color key={id} hex={hex} role={role} contrastText={contrastText} />
      ))}
    </>
  );
}

export default App;
