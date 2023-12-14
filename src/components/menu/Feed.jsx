import React from 'react';
import styles from './Feed.module.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
const Feed = () => {
  const posts = [
    {
      id: 1,
      imageUrl: 'https://aventurasnahistoria.uol.com.br/media/_versions/gettyimages-451272584_widelg.jpg',
      title: 'Show do michael jackson',
      text: 'Um dia inesquecível #tbt',
      date: '10 de dezembro de 1992',
      author: 'Mickey',
      likes: 15,
      shares: 5,
      comments: [
        { id: 1, author: 'Batman', text: 'esse dia foi louco' },
        { id: 2, author: 'Aquaman', text: 'IRADO!!!' },
      ],
    },
    {
      id: 1,
      imageUrl: 'https://lncimg.lance.com.br/uploads/2016/05/19/573e0eb99bd2d.jpeg',
      title: 'VASCAO',
      text: 'Gol do juninho no monumental',
      date: '15 de agosto de 2023',
      author: 'Neymar',
      likes: 15,
      shares: 5,
      comments: [
        { id: 1, author: 'Lula', text: 'não de ouvidos a este cara, aqui é vascão' },
        { id: 2, author: 'Bolsonaro', text: 'eu gosto do flamengo' },
      ],
    },
    {
      id: 1,
      imageUrl: 'https://i0.wp.com/www.tor.com/wp-content/uploads/2017/01/Batman-Surf01.jpg?fit=630%2C+9999&crop=0%2C0%2C100%2C471px&ssl=1',
      title: 'BatSurf',
      text: 'O coringa roubou um barco e eu fui atrás dele.',
      date: '5 de janeiro de 2023',
      author: 'Batman',
      likes: 15,
      shares: 5,
      comments: [
        { id: 1, author: 'Coringa', text: 'Para de ser maluco, eu estava com o robin' },
        { id: 2, author: 'Superman', text: 'ai batman, tu tira onda demais brother' },
      ],
    },
    {
      id: 1,
      imageUrl: 'data:image/jpeg;base64,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',
      title: 'Batendo um rango',
      text: 'Cheio de fome esse dia',
      date: '01 de agosto de 2021',
      author: 'Pica-Pau',
      likes: 15,
      shares: 5,
      comments: [
        { id: 1, author: 'Zeca urubu', text: 'você é um esfomeado cara' },
        { id: 2, author: 'pingu', text: 'Sobrou um peixinho para mim?' },
      ],
    },
    {
      id: 1,
      imageUrl: 'https://images3.alphacoders.com/127/1278019.jpg',
      title: 'Salvando esse idiota do meu genro',
      text: 'Meu genro estava em perigo, e sendo o ser mais inteligente da galáxia, eu o salvei.',
      date: '10 de dezembro de 2023',
      author: 'Ricky Sanchez',
      likes: 15,
      shares: 5,
      comments: [
        { id: 1, author: 'Morty', text: 'Caramba vovô, vc nem me chamou pra esse rolê' },
        { id: 2, author: 'Summer', text: 'o morty é um burro!!!' },
      ],
    },
    {
      id: 1,
      imageUrl: 'https://pipocamoderna.com.br/storage/2016/10/spiderman-selfie.jpg',
      title: 'Oi senhor stark!',
      text: 'selfiezinha do empire state',
      date: '19 de Janeiro de 2023',
      author: 'SpiderMan',
      likes: 15,
      shares: 5,
      comments: [
        { id: 1, author: 'IronMan', text: 'Cuidado garoto, esse uniforme me custou caro!' },
        { id: 2, author: 'Mary Jane', text: 'Oi razão da minha libido' },
      ],
    },
  ];

  return (
    <div className={styles.feedContainer}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <img src={post.imageUrl} alt="Imagem da Postagem" />
          <div className={styles.postContent}>
            <div className={styles.postTitle}>{post.title}</div>
            <div className={styles.postText}>{post.text}</div>
          </div>
          <div className={styles.postMeta}>
            <div className={styles.postAuthor}>{post.author}</div>
            <div className={styles.postDate}>{post.date}</div>
          </div>
          <div className={styles.postActions}>
            <span><ThumbUpIcon /> {post.likes}</span>
            <span><ShareIcon /> {post.shares}</span>
          </div>
          <div className={styles.postComments}>
            {post.comments.map((comment) => (
              <div key={comment.id} className={styles.comment}>
                <strong>{comment.author}:</strong> {comment.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
