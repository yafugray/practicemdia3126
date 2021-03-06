import React from 'react';
import styled from 'styled-components';
//useEffect - beginning lifecycle, update the lifecycle and end the lifecycle


const Container = styled.div`
    width:100%;
    height:100%;
    background-color:${props=>props.bgcolor ? props.bgcolor : "#DEFECD"};
    min-height:10px;
    min-height:10px;
`;

const ImgContainer = styled.img`
    width:100%;
    height:100%;
    min-width:400px;
    flex:1;
    justify-content:center;
    align-items:center;
`;

const Content = ({children, bgcolor, bgimg}) => {
    return <Container bgcolor={bgcolor}>
            <ImgContainer src="/maho.png">{children}</ImgContainer>
            
    </Container>
}

Content.defaultProps = {
    bgcolor:"#DEFECD",
    bgimg:"src(/cherry.png)"
}

export default Content;