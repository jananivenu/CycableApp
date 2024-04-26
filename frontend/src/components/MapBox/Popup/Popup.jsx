import React from 'react';
import styles from './styles.jsx';

const PopupContent = ({ incident_type }) => {
  return (
    <div style={styles.popupCard}> 
      <h2>{incident_type}</h2>
    </div>
  );
};

export default PopupContent;
