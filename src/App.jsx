import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/menu/Menu';
import Feed from './components/menu/Feed';
import Friends from './components/menu/Friends';
import Sugestao from './components/menu/Sugestao';

export default function App() {
  return (
    <main>
      <Menu />
      <Header />
      <Feed />
      <Sugestao />
      <Friends />
    </main>
  );
}