import React, { useState } from "react";
export default function FileUpload() {
// info about the selectedFile
    const [selectedFile, setSelectedFile] = useState()
    // checks if the file is picked or not
    const [isFilePicked, setIsFilePicked] = useState(false)
  return (
    <div className="flex flex-col">
      <input
        type="file"
        name="file"
        className="border border-blue-700 mb-12 py-2 rounded-md px-12"
      />
      <button
        type="submit"
        className="bg-blue-700 text-white px-12 py-2 rounded-md"
      >
        Upload
      </button>
    </div>
  );
}
