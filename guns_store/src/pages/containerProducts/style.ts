import styled from "styled-components";


export const Ul = styled.ul`
display:flex;
flex-direction:column;
flex-wrap: wrap;
align-items:center;
justify-content:center;
width:100%;
@media (min-width: 620px){
    
justify-content:space-around;
   flex-direction:row; 

}
`
export const Titulo = styled.h2`
font-size:30px;
font-weight:600;
padding-left:30px;
`
export const Div = styled.div`
display:flex;
justify-content:space-between;
width:100%;
padding-top:30px;
padding-bottom:30px;
background-color:#F0F0F0;

button{
    margin-right:30px;
    background-color:black;
    color:white;
    border-radius:20px;
    transition:all 0.5s;
    :hover{
        background-color:white;
        color:black;
        font-weight:700;
        scale:1.1;
        cursor:pointer;
    }
}

`