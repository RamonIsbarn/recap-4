import { useEffect, useState } from "react";
import "./CopyToClipboard.css";

export default function CopyToClipboard({ hex }) {
  const [isCopied, setIsCopied] = useState(false);

  async function writeClipboardText(text) {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    function resetButton() {
      setIsCopied(false);
    }
    setTimeout(resetButton, 3000);
  }, [isCopied]);

  return (
    <>
      {isCopied ? (
        <button className="color-card__button">SUCCESFULLY COPIED!</button>
      ) : (
        <button
          className="color-card__button"
          onClick={() => writeClipboardText(hex)}
        >
          COPY
        </button>
      )}
    </>
  );
}
