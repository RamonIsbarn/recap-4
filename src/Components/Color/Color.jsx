import "./Color.css";

export default function Color({ role, hex, contrastText }) {
  return (
    <div style={{ backgroundColor: hex, color: contrastText }}>
      <p>{hex}</p>
      <p>{role}</p>
      <p>{contrastText}</p>
    </div>
  );
}
