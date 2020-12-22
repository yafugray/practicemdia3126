import React from 'react';
import styled from 'styled-components';
//useEffect - beginning lifecycle, update the lifecycle and end the lifecycle


const Container = styled.div`
    width:100%;
    height:100%;
    background-color:${props=>props.bgcolor ? props.bgcolor : "#DEFECD"};
    min-height:10px;
    min-height:10px;
    div {
        width:400px
        height:auto;
        display:flex;
        justify-content:center;
        align-items:center;
        background-image: ${props=>props.bgimg ? props.bgimg : "#DEFECD"};
    }
    `;

const Content = ({children, bgcolor, bgimg}) => {
    return <Container bgcolor={bgcolor}>
            <div>{bgimg}</div>
            {children}
    </Container>
}

Content.defaultProps = {
    bgcolor:"#DEFECD",
    bgimg:"src(/maho.png)"
}

export default Content;