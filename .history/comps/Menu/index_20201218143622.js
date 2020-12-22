
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
//useEffect - beginning lifecycle, update the lifecycle and end the lifecycle

const Container = styled.div`
    display:inline-flex;
    flex-direction:column;
`;
const DropDownMenu = styled.div`
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 20px;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    background-color: #FFF;
    transition:background-color 0.5s;
    &:hover{
        background-color:#DDD;
    }
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
    box-shadow: 5px 0px 18px rgba(0, 0, 0, 0.08);
    display:${props=>props.expanded ? "inline-flex" : "hidden" };
    height:${props=>props.expanded ? "auto" : "0px" };
    opacity:${props=>props.expanded ? 1 : 0 };
    transition:opacity 0.5s;
    flex-direction:column;
    margin-top:10px;
    div{
        padding:10px 15px;
        margin:5px 0;
    }
`;

const ExpandedIcon = styled.img`
transition: transform 0.3s;
    transform: ${props=>props.expanded ? "rotate(180deg)" : "none"};
`;

const Menu = ({expand}) =>{

    const [expanded, setExpanded] = useState(false);

    // when our components have configuration changed
    useEffect(()=>{
        setExpended(expand);
    },[expand])

    return <Container>
        <DropDownMenu onClick={()=> (
            setExpanded(!expanded)
            //click -> true
            //click -> false(default, start)
        )}>
            <DropDownBox>
                <div><img src='/profile.png'></img></div>
                <div>johndoe@bcit.ca</div>
                <div><ExpandedIcon src="/expand.png" expanded={expanded}/></div>
            </DropDownBox>
        </DropDownMenu>

        <Expand expanded={expanded}>
            <div>Change BG Color</div>
            <div>Change BG Image</div>
            <div>Help</div>
        </Expand>
    </Container>
}

 Menu.defaultProps = {
    expand:false
 }

 export default Menu;

 //step 1, Setup
 //step 2, style it out
 //step 3, figure out the state
 //step 4, make it configure