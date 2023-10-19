import React from 'react';

const ShareButton = () => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        // Using the Web Share API
        await navigator.share({
          title: 'Share Example',
          text: 'Check out this awesome content!',
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that do not support the Web Share API
        alert('Web Share API is not supported in this browser.');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <div>
      <button style={{borderRadius: "8px", width: "100px", fontSize: "15px"}} onClick={handleShare}>Share</button>
    </div>
  );
};

export default ShareButton;

