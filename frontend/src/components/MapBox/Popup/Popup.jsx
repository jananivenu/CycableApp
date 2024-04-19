import React from 'react';
import styles from './styles.jsx'; // Import the styles object

const PopupContent = ({ eventType }) => {
  return (
    <div style={styles.popupCard}> {/* Apply the styles */}
      <h2>{eventType}</h2>
    </div>
  );
};

export default PopupContent;
