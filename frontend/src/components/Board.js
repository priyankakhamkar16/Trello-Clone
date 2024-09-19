import React, { useState } from 'react';
import List from './List';
import '../styles/Board.css';

const Board = ({ boardId, lists, handleAddList, handleAddCard }) => {
  const [newListTitle, setNewListTitle] = useState('');

  const handleAddNewList = () => {
    handleAddList(newListTitle);
    setNewListTitle('');
  };

  return (
    <div className="board-container">
      {lists.map((list) => (
        <List key={list._id} list={list} handleAddCard={handleAddCard} />
      ))}
      <div className="new-list-container">
        <input
          type="text"
          value={newListTitle}
          onChange={(e) => setNewListTitle(e.target.value)}
          placeholder="Enter list title"
        />
        <button onClick={handleAddNewList}>Add List</button>
      </div>
    </div>
  );
};

export default Board;
