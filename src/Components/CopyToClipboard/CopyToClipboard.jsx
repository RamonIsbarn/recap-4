import { useEffect, useState } from "react";

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
        <button>SUCCESFULLY COPIED!</button>
      ) : (
        <button onClick={() => writeClipboardText(hex)}>COPY</button>
      )}
    </>
  );
}
