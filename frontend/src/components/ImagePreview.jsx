import { useEffect, useState } from "react";

export default function ImagePreview({ file }) {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!file) {
      setPreview("");
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  if (!file) return null;

  return (
    <div className="mt-8 flex justify-center">
      <img
        src={preview}
        alt="Preview"
        className="w-80 rounded-2xl shadow-xl border"
      />
    </div>
  );
}