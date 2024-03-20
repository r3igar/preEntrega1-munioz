import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import CartWidget from './CardWidget/CardWidget';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <h2>
        <Link to="/" className={styles.brand}>forja d20</Link>
      </h2>
      <nav className={styles.nav}>
        <Link to="/category/dados" className={`${styles.btn} ${styles.btnPrimary}`}>Dados</Link>
        <Link to="/category/miniaturas" className={`${styles.btn} ${styles.btnSecondary}`}>Miniaturas</Link>
        <Link to="/category/mapas" className={`${styles.btn} ${styles.btnSecondary}`}>Mapas</Link>
      </nav>
      <CartWidget/>
    </header>
  );
}

export default Navbar;
