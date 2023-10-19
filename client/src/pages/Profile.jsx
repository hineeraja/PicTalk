
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import LikeButton from './LikeButton';
import Comments from './Comments';
import ShareButton from './ShareButton';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Retrieve images from local storage on component mount
    const storedImages = localStorage.getItem('imageGallery');
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
  }, []);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        newImages.push({ data: e.target.result, description: description || 'No description' });

        // If all images are processed, update the state
        if (newImages.length === files.length) {
          setImages([...images, ...newImages]);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUploadClick = () => {
    // Save to local storage
    localStorage.setItem('imageGallery', JSON.stringify(images));
  };

  return (
    <div>
      <br />
      <br />
      <div>
        <input style={{ border: "solid", borderRadius: "8px", width: "100px", fontSize: "15px" }} type="file" onChange={handleImageChange} multiple />
      </div>
      <br />
      <div>
        <label style={{ fontSize: "20px" }}>Description:</label>
        <input style={{ width: "1000px" }} type="text" value={description} onChange={handleDescriptionChange} />
      </div>
      <br />
      <div>
        <button style={{ borderRadius: "8px", width: "100px", fontSize: "15px" }} onClick={handleUploadClick}>Upload</button>
      </div>
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        {images.map((image, index) => (
          <div key={index}>
            <img style={{ flexDirection: "row", justifyContent: "space-between", width: "600px", height: "600px" }} src={image.data} alt={`Image ${index}`} />
            <p>Description: {image.description}</p>
            <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
              <LikeButton />
              <Comments />
              <ShareButton />
              {/* <ShareButton photoUrl={photoUrl} /> */}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};


export default ImageGallery;

