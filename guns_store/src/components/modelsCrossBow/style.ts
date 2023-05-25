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
    text-decoration:underline black;
}
`