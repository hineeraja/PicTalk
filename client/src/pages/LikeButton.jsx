
import React, { useState, useEffect } from 'react';

const LikeButton = ({ photoId }) => {
  // Create a unique key for storing likes in local storage
  const likesKey = `likes_${photoId}`;

  // State to manage the number of likes
  const [likes, setLikes] = useState(0);

  // useEffect to load the initial number of likes from localStorage
  useEffect(() => {
    const storedLikes = localStorage.getItem(likesKey);
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }
  }, [likesKey]);

  // Function to handle the like button click
  const handleLikeClick = () => {
    // Increment the likes and update the state
    const newLikes = likes + 1;
    setLikes(newLikes);

    // Save the updated likes to localStorage
    localStorage.setItem(likesKey, newLikes.toString());
  };

  return (
    <div>
      <button style={{borderRadius: "8px", width: "100px", fontSize: "15px"}} onClick={handleLikeClick}>Like</button>
      <h6>{likes} Likes</h6>
    </div>
  );
};

export default LikeButton;