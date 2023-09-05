import React from 'react';
import styles from './loading.module.scss';

const Loader = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default Loader;
