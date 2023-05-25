import styled from "styled-components";
export const DivTitle= styled.div`
    width:100%;
    background-color:#C6C6C6;
    height:50px;
    display:flex;
    align-items:center;
    h1{
    font-size:25px;
    font-weight:700;
    font-family:system-ui;
    letter-spacing:2px;
}
`
export const Main = styled.main`
margin-top:25px;
width:100%;
background-color:white;
height:80%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

div{
    display:flex;
    height:50px;
    align-items:center;
    @media (max-width: 600px) {
    
      height: 150px;
    }
}
span{
    color:red;
    cursor:pointer;
    :hover{
        text-decoration:underline black;
    }
}





`