
import React, { useState, useEffect } from 'react';

const Comments = () => {
  const [showInput, setShowInput] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
      setShowInput(false);
    }
  };

  return (
    <div>
      <button style={{borderRadius: "8px", width: "100px", fontSize: "15px"}} onClick={() => setShowInput(!showInput)}>Comments</button>
      {showInput && (
        <div>
          <textarea
            rows="4"
            cols="50"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          ></textarea>
          <br />
          <button style={{borderRadius: "8px", width: "100px", fontSize: "15px"}} onClick={handleAddComment}>Add Comment</button>
        </div>
      )}
      {showInput && (
        <div>
          <h2>{comments.length} Comments</h2>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Comments;