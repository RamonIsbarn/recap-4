import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";
import { useState } from "react";

export default function Color({ role, hex, contrastText, onDelete, id }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [colorCardValues, setColorCardValues] = useState({
    role: role,
    hex: hex,
    contrastText: contrastText,
  });

  const handleEditColor = (updatedColor) => {
    setColorCardValues({
      role: updatedColor.role,
      hex: updatedColor.hex,
      contrastText: updatedColor.contrastText,
    });
    setIsEditing(false);
  };

  return (
    <div
      style={{
        backgroundColor: colorCardValues.hex,
        color: colorCardValues.contrastText,
      }}
    >
      <p>{colorCardValues.hex}</p>
      <p>{colorCardValues.role}</p>
      <p>{colorCardValues.contrastText}</p>
      {isDeleting ? (
        <>
          <button onClick={() => setIsDeleting(false)}>CANCEL</button>
          <button onClick={() => onDelete(id)}>DELETE</button>
        </>
      ) : (
        <button onClick={() => setIsDeleting(true)}>DELETE</button>
      )}
      {isEditing ? (
        <>
          <ColorForm
            initialRole={colorCardValues.role}
            initialHex={colorCardValues.hex}
            initialContrast={colorCardValues.contrastText}
            buttonText={"UPDATE COLOR"}
            onAddColor={handleEditColor}
          />
          <button onClick={() => setIsEditing(false)}>CANCEL</button>
        </>
      ) : (
        <button onClick={() => setIsEditing(true)}>EDIT</button>
      )}
    </div>
  );
}
