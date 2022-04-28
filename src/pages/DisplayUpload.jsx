import React, { useState, useEffect } from "react";
export default function DisplayUpload() {
  // create state and set to empty array
  const [images, setImages] = useState([]);

  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;

    const newImageUrl = [];
    images.forEach((image) => newImageUrl.push(URL.createObjectURL(image)));
    setImageUrl(newImageUrl);
  }, [images]);

  
  const onChangeHandler = (e) => {
    setImages([e.target.files]);
  };
  return (
    <div className="container flex items-center justify-center h-screen">
      <input
        className="border border-blue-700 mb-12  px-4 py-2  rounded-md md:px-12"
        type="file"
        multiple
        accept="image/*"
        onChange={onChangeHandler}
      />

      <div>
        {imageUrl.map((imageSrc) => (
          <img src={imageSrc}  alt="dummy"/>
        ))}
      </div>
    </div>
  );
}
