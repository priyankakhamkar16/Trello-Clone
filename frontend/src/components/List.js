import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/List.css';

const List = ({ list, handleAddCard }) => {
  const [newCardTitle, setNewCardTitle] = useState('');
  const [showCardInput, setShowCardInput] = useState(false);

  const handleAddNewCard = () => {
    if (newCardTitle.trim()) {
      handleAddCard(list._id, newCardTitle);
      setNewCardTitle('');
      setShowCardInput(false);
    }
  };

  return (
    <div className="list-container">
      <h3>{list.title}</h3>
      {list.cards && list.cards.map((card) => (
        <Card key={card._id} card={card} />
      ))}
     {showCardInput ? (
  <div className="new-card-container">
    <input
      type="text"
      value={newCardTitle}
      onChange={(e) => setNewCardTitle(e.target.value)}
      placeholder="Enter card title"
    />
    <button className="add-card-button" onClick={handleAddNewCard}>Add Card</button>
    <button className="cancel-button" onClick={() => setShowCardInput(false)}>Cancel</button>
  </div>
) : (
  <button className="add-card-button" onClick={() => setShowCardInput(true)}>Add Card</button>
)}

    </div>
  );
};

export default List;
