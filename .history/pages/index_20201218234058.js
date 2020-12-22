import React from 'react';
import Menu from '../comps/Menu'
import Content from '../comps/Content'

export default function Home() {
  return <div className="home">
    
    <div className="content">
      <Content >
      </Content>
    </div>

    <div className="menu">
      <Menu />
    </div>
  </div>
}
