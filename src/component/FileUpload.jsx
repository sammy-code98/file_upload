import React, { useState } from "react";
export default function FileUpload() {
  // info about the selectedFile
  const [selectedFile, setSelectedFile] = useState();
  // checks if the file is picked or not
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
    console.log("chnage");
  };
  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <div className="flex flex-col">
      <input
        type="file"
        name="file"
        className="border border-blue-700 mb-12  px-4 py-2  rounded-md md:px-12"
        onChange={changeHandler}
      />
      {isFilePicked ? (
        <div className="mb-4 mx-auto border border-gray-500 p-4 rounded-md shadow-md">
          <p className="text-gray-500 font-bold font-mono italic ">
            {" "}
            Filename : {selectedFile.name}
          </p>
          <p className="text-gray-500 font-bold font-mono italic ">
            Filetype : {selectedFile.type}
          </p>
          <p className="text-gray-500 font-bold font-mono italic ">
            Size in bytes : {selectedFile.size}
          </p>
          <p className="text-gray-500 font-bold font-mono italic ">
            Last Modifed Date :{" "}
            {new Date(selectedFile.lastModified).toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p className="text-center mb-4 text-xl text-gray-500 font-bold font-mono italic ">
          Select a file to show details
        </p>
      )}
      <button
        type="submit"
        className="bg-blue-700 text-white md:px-12 py-2 rounded-md font-mono font-bold"
        onClick={handleSubmit}
      >
        Upload
      </button>
    </div>
  );
}
