import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const imageType = /image\/(png|jpg|jpeg)/gm;
export default function DisplayUpload() {
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);

  const onChangeHandler = (e) => {
    const { files } = e.target;

    const validImageFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageType)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert("selected image file are not valid type");
  };
  useEffect(() => {
    const images = [];
    const fileReaders = [];
    let isCancel = false;
    if (imageFiles.length) {
      imageFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);

        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            images.push(result);
          }
          if (images.length === imageFiles.length && !isCancel) {
            setImages(images);
          }
        };
        fileReader.readAsDataURL(file);
      });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [imageFiles]);

  return (
    <>
      <Link
        to="/"
        className="bg-blue-700 text-white px-2 md:px-12 py-2 rounded-md font-mono font-bold float-right mt-4 mx-4"
      >
        Go Home{" "}
      </Link>
      <div className="h-screen">
        <div className="container flex items-center justify-center ">
          <input
            className="border border-blue-700 mb-12 mt-24  px-4 py-2  font-mono text-gray-500 rounded-md md:px-12"
            type="file"
            multiple
            accept="image/*"
            onChange={onChangeHandler}
          />
        </div>

        {images.length > 0 ? (
          <div className="md:grid md:grid-cols-3 md:gap-4 p-4">
            {images.map((image, idx) => {
              return (
                <div
                  className="border border-blue-700 mb-4 rounded-md shadow-lg"
                  key={idx}
                >
                  {" "}
                  <img className="p-2" src={image} alt="" />{" "}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}
