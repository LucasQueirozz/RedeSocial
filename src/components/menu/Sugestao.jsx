import React from 'react';
import SugestaoAmigos from './SugestaoAmigos';
import styles from './Sugestao.module.css';

const Friends = () => {
  const sugestoesData = [
    {
      id: 1,
      name: 'Mulher Maravilha',
      image: 'https://universoretro.com.br/wp-content/uploads/2016/05/uigi.jpg',
      mutualFriend: 7,
    },
    {
      id: 2,
      name: 'Bolsonaro',
      image: 'https://elimeira.com.br/wp-content/uploads/2022/03/bolsonaro-Foto-Marcos-Correa-PR-1.jpg.webp',
      mutualFriend: 25,
    },
    {
      id: 2,
      name: 'Lula',
      image: 'https://conteudo.imguol.com.br/c/noticias/cb/2022/01/31/o-ex-presidente-luiz-inacio-lula-da-silva-pt-1643659431277_v2_900x506.jpg',
      mutualFriend: 13,
    },
  ];

  return (
    <div className={styles.friendsContainer}>
      <h2>Sugestões de Amigos</h2>
      {sugestoesData.map((sugestao) => (
        <SugestaoAmigos key={sugestao.id} suggestion={sugestao} />
      ))}
    </div>
  );
};

export default Friends;

