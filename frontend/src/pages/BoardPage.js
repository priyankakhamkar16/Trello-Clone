import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import AddBoard from '../components/AddBoard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons'; 
import { faClock, faUser, faCogs, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; 
import '../styles/BoardPage.css';

const BoardPage = () => {
  const [isAddBoardVisible, setIsAddBoardVisible] = useState(false);
  const [boards, setBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  const [lists, setLists] = useState([]);

  const fetchBoards = async () => {
    try {
      const response = await fetch('https://trello-clone-chi-seven.vercel.app/api/boards');
      const data = await response.json();
      setBoards(data);
    } catch (error) {
      console.error('Error fetching boards:', error);
    }
  };

  const fetchLists = async (boardId) => {
    try {
      const response = await fetch(`https://trello-clone-chi-seven.vercel.app/api/lists?boardId=${boardId}`);
      const data = await response.json();
      setLists(data);
    } catch (err) {
      console.error('Error fetching lists:', err);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  useEffect(() => {
    if (selectedBoardId) {
      fetchLists(selectedBoardId);
    }
  }, [selectedBoardId]);

  const addNewBoard = (newBoardData) => {
    setBoards((prevBoards) => [...prevBoards, newBoardData]);
  };

  const handleAddList = async (newListTitle) => {
    if (newListTitle.trim()) {
      const newList = { title: newListTitle, boardId: selectedBoardId };
      try {
        const response = await fetch('https://trello-clone-chi-seven.vercel.app/api/lists/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newList),
        });
        const data = await response.json();
        setLists([...lists, data]);
      } catch (err) {
        console.error('Error adding list', err);
      }
    }
  };

  const handleAddCard = async (listId, cardTitle) => {
    if (cardTitle.trim() && listId) {
      const newCard = { title: cardTitle, listId };
      try {
        const response = await fetch('https://trello-clone-chi-seven.vercel.app/api/cards/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCard),
        });
        const data = await response.json();
        setLists((prevLists) =>
          prevLists.map((list) =>
            list._id === listId ? { ...list, cards: [...list.cards, data] } : list
          )
        );
      } catch (err) {
        console.error('Error adding card', err);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    window.location.href = '/'; // Redirect to home page
  };

  return (
    <div className="page-container">
      <div className="dashboard">
        <h2 className="dashboard-title">Your Boards</h2>
        <ul className="dashboard-menu">
          {boards.map((board) => (
            <li
              key={board._id}
              onClick={() => setSelectedBoardId(board._id)}
              className="dashboard-item"
            >
              <FontAwesomeIcon icon={faTrello} className="dashboard-icon" />
              <span className="dashboard-text">{board.name}</span>
            </li>
          ))}
        </ul>
        <div className="dashboard-options">
          <div className="dashboard-item" onClick={() => setIsAddBoardVisible(true)}>
            <FontAwesomeIcon icon={faPlus} className="dashboard-icon" />
            <span className="dashboard-text">Create New Board</span>
          </div>
          <div className="dashboard-item">
            <FontAwesomeIcon icon={faClock} className="dashboard-icon" />
            <span className="dashboard-text">Recently Viewed</span>
          </div>
          <div className="dashboard-item">
            <FontAwesomeIcon icon={faUser} className="dashboard-icon" />
            <span className="dashboard-text">Profile</span>
          </div>
          <div className="dashboard-item">
            <FontAwesomeIcon icon={faCogs} className="dashboard-icon" />
            <span className="dashboard-text">Settings</span>
          </div>
          <div className="dashboard-item" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} className="dashboard-icon" />
            <span className="dashboard-text">Logout</span>
          </div>
        </div>
      </div>

      <div className="main-content">
        {selectedBoardId && (
          <Board 
            boardId={selectedBoardId} 
            lists={lists} 
            handleAddList={handleAddList} 
            handleAddCard={handleAddCard} 
          />
        )}
        {isAddBoardVisible && (
          <AddBoard onClose={() => setIsAddBoardVisible(false)} onAddBoard={addNewBoard} />
        )}
      </div>
    </div>
  );
};

export default BoardPage;
