import styled from "styled-components";
import image from  "../images/backgroundMap.jpg";

export default function Container(props){
    return(
        <>
        <ContainerPage style={{ backgroundImage:`url(${image})` }}>
          {props.children}
        </ContainerPage>
        </>
    );
}

const ContainerPage = styled.div`
box-sizing:border-box;
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
opacity:0.8;
font-family: "JetBrains Mono",monospace;
overflow-y:scroll;
position:fixed;
`