import React from 'react';
import styles from './Menu.module.css';
import perfilUm from './fotos/perfilUm.jpg';
import perfilDois from './fotos/perfilDois.jpg';
import perfilTres from './fotos/perfilTres.png';
import perfilQuatro from './fotos/perfilQuatro.jpeg';
import perfilCinco from './fotos/perfilCinco.jpg';

const Menu = () => {
  const peopleImages = [perfilUm, perfilDois, perfilTres, perfilQuatro, perfilCinco];

  return (
    <div className={styles.menu}>      
      {peopleImages.map((image, index) => (
        <img key={index} src={image} alt={`Person ${index + 1}`} />
      ))}
    </div>
  );
};

export default Menu;
