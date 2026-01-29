import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";
import { useState } from "react";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

export default function Color({
  role,
  hex,
  contrastText,
  onDelete,
  id,
  onEdit,
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditColor(newColor) {
    onEdit(newColor);
    setIsEditing(false);
  }

  return (
    <div
      style={{
        backgroundColor: hex,
        color: contrastText,
      }}
      className="color-card"
    >
      <h2 className="color-card__headline">{hex}</h2>
      <CopyToClipboard hex={hex} />
      <p>{role}</p>
      <p>{contrastText}</p>
      {isDeleting ? (
        <>
          <button
            className="color-card__button"
            onClick={() => setIsDeleting(false)}
          >
            CANCEL
          </button>
          <button className="color-card__button" onClick={() => onDelete(id)}>
            DELETE
          </button>
        </>
      ) : (
        <button
          className="color-card__button"
          onClick={() => setIsDeleting(true)}
        >
          DELETE
        </button>
      )}
      {isEditing ? (
        <>
          <ColorForm
            initialRole={role}
            initialHex={hex}
            initialContrast={contrastText}
            id={id}
            buttonText={"UPDATE COLOR"}
            onAddColor={handleEditColor}
          />
          <button
            className="color-card__button"
            onClick={() => setIsEditing(false)}
          >
            CANCEL
          </button>
        </>
      ) : (
        <button
          className="color-card__button"
          onClick={() => setIsEditing(true)}
        >
          EDIT
        </button>
      )}
    </div>
  );
}
