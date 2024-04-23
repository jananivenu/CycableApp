import React from 'react';
import styles from './styles.jsx';

const PopupContent = ({ eventType }) => {
  return (
    <div style={styles.popupCard}> 
      <h2>{eventType}</h2>
    </div>
  );
};

export default PopupContent;
