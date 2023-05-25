import styled from "styled-components";



export const Li = styled.li`
display:flex;

flex-direction:column;
justify-content:center;
align-items:center;
width:240px;
height:300px;
border:1px solid grey;
text-align:center;
border-radius:5px;
transition:all 0.4s;
cursor:pointer;
background-color:white;
margin-bottom:25px;
@media (min-width: 620px){
    
    
    
    }
img{
    width:125px;
    height:110px;
    margin-bottom:40px;
}

p{
    margin-top:20px;
    font-weight:700;
    color:#7D0000;
}

:hover{
    border:2px solid yellow;
}
`
export const Ul = styled.ul`
display:flex;
align-items:center;
flex-direction:column;

justify-content:space-around;
width:100%;
@media (min-width: 620px){
justify-content:space-evenly;;
flex-direction:row;
flex-wrap:wrap;
    
}


`
export const Titulo = styled.h2`
font-size:30px;
font-weight:600;
padding-left:30px;
`
export const Div = styled.div`
display:flex;
justify-content:center;
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