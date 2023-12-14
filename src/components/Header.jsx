import React from 'react';
import { FaHome, FaSearch, FaCompass, FaEnvelope, FaHeart, FaUser } from 'react-icons/fa';
import styles from './Header.module.css';
import profileImage from './fotoPerfil.jpg';

const Header = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuItem}>
        <FaHome /> Página Inicial
      </div>
      <div className={styles.menuItem}>
        <FaSearch /> Pesquisa
      </div>
      <div className={styles.menuItem}>
        <FaCompass /> Explorar
      </div>
      <div className={styles.menuItem}>
        <FaEnvelope /> Mensagens
      </div>
      <div className={styles.menuItem}>
        <FaHeart /> Notificações
      </div>
      <div className={styles.menuItem}>
        <img src={profileImage} alt="Foto de Perfil" /> Perfil
      </div>
    </div>
  );
};

export default Header;