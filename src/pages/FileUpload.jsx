import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    const formData = new FormData();
    formData.append("file", selectedFile);

    fetch(
      "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("succes:", data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
    console.log("submit");
  };
  return (
    <>
        <Link
          to="/"
          className="bg-blue-700 text-white md:px-12 py-2 rounded-md font-mono font-bold float-right mt-4 mx-4"
        >
          Go Home{" "}
        </Link>
      <div className="container flex items-center justify-center h-screen">
        <div className="flex flex-col">
          <input
            type="file"
            name="file"
            className="border border-blue-700 mb-12  px-4 py-2 font-mono text-gray-500 rounded-md md:px-12"
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
      </div>
    </>
  );
}
