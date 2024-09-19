import React, { useState } from 'react';
import '../styles/AddBoard.css'; // Import the CSS file

const AddBoard = ({ onClose, onAddBoard }) => {
  const [boardName, setBoardName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (boardName.trim()) {
      try {
        const response = await fetch('https://trello-clone-xi-one.vercel.app/api/boards/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: boardName }),
        });

        const data = await response.json();
        onAddBoard(data); // Pass the new board to parent
        setBoardName('');
      } catch (err) {
        console.error('Error creating board', err);
      }
    }
  };

  return (
    <div className="add-board-modal">
      <div className="add-board-content">
        <h2>Create a New Board</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="boardName">Board Name:</label>
          <input
            type="text"
            id="boardName"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            required
          />
          <button type="submit">Create Board</button>
          <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddBoard;
