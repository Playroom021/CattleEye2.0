import { useRef, useState } from "react";
import { Upload, Image as ImageIcon } from "lucide-react";
import Spinner from "./Spinner";

export default function UploadCard({ file, setFile}) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  

  function handleFile(selectedFile) {
    if (!selectedFile) return;

    // Allow only images
    if (!selectedFile.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    // Max size 10MB
    if (selectedFile.size > 10 * 1024 * 1024) {
      alert("Maximum image size is 10MB.");
      return;
    }

    setFile(selectedFile);
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => handleFile(e.target.files[0])}
      />

      <div
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFile(e.dataTransfer.files[0]);
        }}
        onDragOver={(e)=>{
            e.preventDefault();
            setDragging(true);
        }}
        className={`
          // mt-10
          // cursor-pointer
          rounded-3xl
          border-2
          border-dashed
          transition-all
          duration-300
          hover:border-green-500
          hover:bg-green-50
          hover:shadow-xl
          hover:-translate-y-1
          p-12
          text-center
          
          ${
            dragging
              ? "border-green-600 bg-green-50 scale-[1.02]"
              : "border-gray-300 hover:border-green-500 hover:bg-gray-50"
          }
        `}
      >
        <Upload
          size={60}
          className="mx-auto text-green-600"
        />
 
        <h2 className="mt-6 text-2xl font-semibold text-gray-800">
          Drag & Drop Image
        </h2>

        <p className="mt-2 text-gray-500">
          or click to browse your computer
        </p>

        <p className="mt-6 text-sm text-gray-400">
          PNG • JPG • JPEG • Max 10MB
        </p>

        {file && (
          <div className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-green-100 p-4">
            <ImageIcon size={20} />
            <span className="font-medium text-green-700">
              {file.name}
            </span>
          </div>
        )}
      </div>
    </>
  );
}