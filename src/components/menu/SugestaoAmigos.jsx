import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';
import styles from './Sugestao.module.css';

const SugestaoAmigos = ({ suggestion }) => {
  const { name, image, mutualFriend } = suggestion;

  return (
    <Card className={styles.sugestaoCard}>
      <CardHeader
        avatar={<Avatar src={image} alt={name} />}
        title={name}
        subheader={`${mutualFriend} amigo em comum`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SugestaoAmigos;