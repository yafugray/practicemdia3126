import React from 'react';
import styled from 'styled-components';
//useEffect - beginning lifecycle, update the lifecycle and end the lifecycle


const Container = styled.div`
    width:100%;
    height:100%;
    background-color:${props=>props.bgcolor ? props.bgcolor: "#DEFECD";
    min-height:10px;
    min-height:10px;
`;

const Content = ({children, bgcolor}) => {
    return <Container>
            {children}
    </Container>
}

Content.defaultProps = {
    bgcolor:"#DEFECD",
}

export default Content;