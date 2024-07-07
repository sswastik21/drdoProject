

import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SelectionPage.module.css';
import drdo from './Images/drdoLogo.png';

const SelectionPage = () => {
  const history = useHistory();

  const handleAdminClick = () => {
    history.push('/admin-login');
  };

  const handleUserClick = () => {
    history.push('/user-login');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.selectionContainer}>
        <img src={drdo} alt="DRDO Logo" className={styles.logosele} />
        <h2>Login as</h2>
        <div className={styles.buttonContainer}>
          <button onClick={handleAdminClick}>Admin</button>
          <button onClick={handleUserClick}>User</button>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
