import React from 'react';
import styled from 'styled-components';
//useEffect - beginning lifecycle, update the lifecycle and end the lifecycle


const Container = styled.div`
    width:100%;
    height:100%;
    background-color:#DEFECD;
    min-height:10px;
    min-height:10px;
`;

const Content = ({children}) => {
    return <Container>
            {children}
    </Container>
}

export default Content;