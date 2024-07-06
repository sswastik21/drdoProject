import React from 'react';
import { useHistory } from 'react-router-dom';
import './SelectionPage.css';
import drdo from "./Images/drdoLogo.png"

const SelectionPage = () => {
  const history = useHistory();

  const handleAdminClick = () => {
    history.push('/admin-login');
  };

  const handleUserClick = () => {
    history.push('/user-login')
  };

  return (
    <div className="selection-container">
      <img src={drdo} alt="" class="logo" />
      <h2>Login as</h2>
      <div className="button-container">
        <button onClick={handleAdminClick}>Admin</button>
        <button onClick={handleUserClick}>User</button>
      </div>
    </div>
  );
};

export default SelectionPage;
