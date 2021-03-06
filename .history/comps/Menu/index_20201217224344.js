import React from 'react';
import styled from 'styled-components';


const DropDownMenu = styled.div`
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 20px;
    display:inline-flex;
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

const Expand = styled.div`
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    /* Sidebar Shadow */
    box-shadow: 5px 0px 18px rgba(0, 0, 0, 0.08);
    div{
        padding:10px;
        margin:5px 0;
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

        <Expand>
            <div>Change BG Color</div>
            <div>Change BG Image</div>
            <div>Help</div>
        </Expand>
    </div>
}

 Menu.defaultProps = {

 }

 export default Menu;