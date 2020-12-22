import React from 'react';
import styled from 'styled-components';


const DropDownMenu = styled.div`
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 20px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const DropDownBox = styled.div`
    width:100%;
    padding:10px;
    display:flex;
    div {
        margin:0 10px;

    }
`;
const Menu = () =>{
    return <div>
        <DropDownMenu>
            <DropDownBox>
                <div><img src='/profile.png'></img></div>
                <div>johndoe@bcit.ca</div>
                <div><img src='/expand.png'></img></div>
            </DropDownBox>
        </DropDownMenu>
    </div>
}

 Menu.defaultProps = {

 }

 export default Menu;