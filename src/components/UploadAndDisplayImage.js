import React, { useEffect, useState } from "react";

const UploadAndDisplayImage = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesData, setImagesData] = useState("")
  useEffect(() => {
    props.upload_image(imagesData)
}, [imagesData]);

  return (
    <div>
      {selectedImage && (
        <div>
        <img alt="not fount" style={{width:'300px', height:'300px'}} src={URL.createObjectURL(selectedImage)} />
        <div/>
        <br />
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0])
          setImagesData((URL.createObjectURL(event.target.files[0])))
          
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;