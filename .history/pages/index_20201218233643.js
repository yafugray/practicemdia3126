import React from 'react';
import Menu from '../comps/Menu'
import Content from '../comps/Content'

export default function Home() {
  return <div className="home">
    <div>
      <Menu />
    </div>
    <div className="content">
      <Content />
    </div>
  </div>
}
