import React from 'react';
import Menu from '../../shared/components/Menu/Menu';
import Title from '../../shared/components/Title/Title';
import Toolbar from '../../shared/components/Toolbar/Toolbar';

export default function Home() {
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Home" />
    </div>
  );
}
