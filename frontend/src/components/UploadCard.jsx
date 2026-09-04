import { useRef, useState } from "react";
import { Upload, Image as ImageIcon, CheckCircle2 } from "lucide-react";

export default function UploadCard({ file, setFile }) {


  const inputRef = useRef(null);
  const cameraRef = useRef(null);

  const [dragging, setDragging] = useState(false);


  function handleFile(selectedFile) {

    if (!selectedFile) return;


    // Only allow images

    if (!selectedFile.type.startsWith("image/")) {

      alert("Please select an image.");

      return;
    }


    // Maximum size: 10MB

    if (selectedFile.size > 10 * 1024 * 1024) {

      alert("Maximum image size is 10MB.");

      return;
    }


    setFile(selectedFile);
  }


  function openFilePicker() {
    inputRef.current?.click();
  }

  function openCamera() {
    cameraRef.current?.click();
  }


  return (

    <>

      {/* Hidden file input */}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {

          handleFile(e.target.files?.[0]);

          // Allows selecting the same file again

          e.target.value = "";

        }}
      />

      {/* Device image picker */}

      <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => {
              handleFile(e.target.files?.[0]);
              e.target.value = "";
          }}
      />

      {/* Camera */}
      <input
          ref={cameraRef}
          type="file"
          accept="image/*"
          capture="environment"
          hidden
          onChange={(e) => {
              handleFile(e.target.files?.[0]);
              e.target.value = "";
          }}
      />


      {/* Upload area */}

      <div
        onClick={openFilePicker}

        onDragOver={(e) => {

          e.preventDefault();

          setDragging(true);

        }}

        onDragLeave={(e) => {

          e.preventDefault();

          setDragging(false);

        }}

        onDrop={(e) => {

          e.preventDefault();

          setDragging(false);

          handleFile(e.dataTransfer.files?.[0]);

        }}

        className={`
          group
          relative
          cursor-pointer
          overflow-hidden
          rounded-3xl
          border-2
          border-dashed
          p-8
          text-center
          transition-all
          duration-300
          sm:p-12

          ${
            dragging
              ? `
                scale-[1.01]
                border-green-600
                bg-green-50
                shadow-lg
              `
              : `
                border-gray-300
                bg-gray-50/50
                hover:-translate-y-0.5
                hover:border-green-500
                hover:bg-green-50/60
                hover:shadow-md
              `
          }
        `}
      >

        {/* Decorative glow */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-green-200/30 blur-3xl" />


        <div className="relative">

          {/* Upload icon */}

          <div
            className={`
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-2xl
              transition-all
              duration-300

              ${
                dragging
                  ? "scale-110 bg-green-600 text-white"
                  : "bg-green-100 text-green-700 group-hover:scale-105 group-hover:bg-green-600 group-hover:text-white"
              }
            `}
          >

            <Upload
              size={36}
              strokeWidth={1.8}
            />

          </div>


          {/* Heading */}

          <h2 className="mt-6 text-xl font-bold text-gray-900 sm:text-2xl">

            {dragging
              ? "Drop your image here"
              : "Drag & Drop Image"
            }

          </h2>


          {/* Description */}

          <p className="mt-2 text-sm text-gray-500 sm:text-base">

            or{" "}

            <span className="font-semibold text-green-700">

              click to browse

            </span>
            <div
                className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    type="button"
                    onClick={openCamera}
                    className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-green-700
                        px-5
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:bg-green-800
                    "
                >
                    📷
                    Take Photo
                </button>

                <button
                    type="button"
                    onClick={openFilePicker}
                    className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        px-5
                        py-3
                        font-semibold
                        text-gray-700
                        transition
                        hover:border-green-300
                        hover:bg-green-50
                        hover:text-green-700
                    "
                >
                    🖼️
                    Choose from Device
                </button>

            </div>

          </p>


          {/* Supported formats */}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">

            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-500 ring-1 ring-gray-200">
              PNG
            </span>

            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-500 ring-1 ring-gray-200">
              JPG
            </span>

            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-500 ring-1 ring-gray-200">
              JPEG
            </span>

            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-500 ring-1 ring-gray-200">
              Max 10MB
            </span>

          </div>


          {/* Selected file */}

          {file && (

            <div
              className="
                mx-auto
                mt-7
                flex
                max-w-xl
                items-center
                gap-3
                rounded-2xl
                border
                border-green-200
                bg-green-50
                p-4
                text-left
              "
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-600 shadow-sm">

                <ImageIcon size={20} />

              </div>


              <div className="min-w-0 flex-1">

                <p className="truncate text-sm font-semibold text-gray-800">

                  {file.name}

                </p>

                <p className="mt-0.5 text-xs text-gray-500">

                  {(file.size / (1024 * 1024)).toFixed(2)} MB

                </p>

              </div>


              <CheckCircle2
                size={22}
                className="shrink-0 text-green-600"
              />

            </div>

          )}

        </div>

      </div>

    </>

  );
}
