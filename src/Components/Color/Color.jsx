import "./Color.css";

export default function Color({ role, hex, contrastText, onDelete, id }) {
  return (
    <div style={{ backgroundColor: hex, color: contrastText }}>
      <p>{hex}</p>
      <p>{role}</p>
      <p>{contrastText}</p>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </div>
  );
}
