import React from 'react';
import Menu from '../comps/Menu'
import Content from '../comps/Content'

export default function Home() {

  const [contentColor, setContentColor] = useState(false);
    
  return <div className="home">

    <div className="content">
      <Content bgcolor={contentColor}>
        <h1>Welcome to my page</h1>
        <div>Hi</div>
      </Content>
    </div>

    <div className="menu">
      <Menu />
    </div>
  </div>
}
