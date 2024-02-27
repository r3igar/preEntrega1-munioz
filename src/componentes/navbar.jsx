import React from 'react';
import styles from './navbar/navbar.module.css';
import CartWidget from './CardWidget/CardWidget';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <h2>forja d20</h2>
      <nav className={styles.nav}>
        <a className={`${styles.btn} ${styles.btnPrimary}`}>Dados</a>
        <a className={`${styles.btn} ${styles.btnSecondary}`}>Miniaturas</a>
        <a className={`${styles.btn} ${styles.btnSecondary}`}>Mapas</a>
      </nav>
      <CartWidget/>
    </header>
  );
}

export default Navbar;
