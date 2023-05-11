import React from 'react';
import styles from '../styles/Marker.module.css'

const Marker = (props: any) => {
    const { color, name, id } = props;
    return (
      <div>
        
      </div>
      {/*<div className={styles.marker}>
        <div
          className={`${styles.pin} ${styles.bounce}`}
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
        />
        <div className={styles.pulse} />
      </div>
    */}
    );
  };

  export default Marker;