import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function DisplayUpload() {
  // create state and set to empty array
  const [images, setImages] = useState([]);

  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    // image.length < 1
    if (images.length !== 0) return;

    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image[0])));
    setImageUrl(newImageUrls);

  }, [images]);
  console.log("newarr:", images);


  const onChangeHandler = (e) => {
    setImages([...e.target.files]);
  };
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
      <div className="border border-blue-700  mb-12 mx-12 py-2">
          {/* {images.map((image) => <p>{image.name}</p>)} */}
          {imageUrl.map((imageSrc) => (
          <img src={imageSrc}  alt="dummy"/>
        ))}
        

        </div>
      </div>
      
    </>
  );
}
