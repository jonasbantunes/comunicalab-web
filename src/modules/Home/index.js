import React from 'react';

import Menu from '../../utils/components/Menu';
import Title from '../../utils/components/Title';
import Toolbar from '../../utils/components/Toolbar';

export default function Home() {
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Home" />
    </div>
  );
}
