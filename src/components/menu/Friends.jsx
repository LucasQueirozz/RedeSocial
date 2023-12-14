import React from 'react';
import styles from './Friends.module.css';

const Friends = () => {
  const friendsData = [
    { id: 1, name: 'Rick Sanchez', image: 'https://sm.ign.com/ign_br/news/r/rick-and-m/rick-and-morty-season-7-gets-rick-heavy-first-look-fall-rele_d9gq.jpg', mutualFriends: 5 },
    { id: 2, name: 'Jerry Smith', image: 'https://d17lbu6bbzbdc8.cloudfront.net/wp-content/uploads/2020/12/22084657/Rick-Morty-Jerry.jpg', mutualFriends: 10 },
    { id: 2, name: 'Beth Smith', image: 'https://pm1.aminoapps.com/6512/085ec24d5ba3e50b19c9024f68b4582ec74fcf5a_hq.jpg', mutualFriends: 10 },
    { id: 2, name: 'Summer Smith', image: 'https://openpsychometrics.org/tests/characters/test-resources/pics/RM/3.jpg', mutualFriends: 10 },

  ];

  return (
    <div className={styles.friends}>
      <h2>Amigos</h2>
      {friendsData.map((friend) => (
        <div key={friend.id} className={styles.friend}>
          <img src={friend.image} alt={friend.name} />
          <div className={styles.friendInfo}>
            <p>{friend.name}</p>
            <p>{friend.mutualFriends} amigos em comum</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friends;
