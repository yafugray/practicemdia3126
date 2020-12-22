import React from 'react';
import styled from 'styled-components';


const DropDownMenu = styled.div`
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 20px;
    display:flex;
`;
const Menu = () =>{
    return <div>
        <DropDownMenu>
            johndoe@bcit.ca
        </DropDownMenu>
    </div>
}

 Menu.defaultProps = {

 }

 export default Menu;