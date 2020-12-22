import React from 'react';
import styled from 'styled-components';


const DropDownMenu = styled.div`
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 20px;
`;
const Menu = () =>{
    return <div>
        <DropDownMenu>
            Menu
        </DropDownMenu>
    </div>
}

 Menu.defaultProps = {

 }

 export default Menu;