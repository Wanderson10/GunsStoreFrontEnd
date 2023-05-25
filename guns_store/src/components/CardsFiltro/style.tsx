import styled from "styled-components";


export const Div = styled.div`

display:flex;
align-items:center;
width:300px;
background-color:grey;
border-radius:20px;
border-bottom:2px solid  black;
border-top: 2px solid black;
transition: all 0.6s;


h2{
    font-size:12px;
    font-weight:900px;
}
img{
    width: 90px;
    height:80px;
    border-radius:20px;
}
:hover{
    cursor:pointer;
    background-color:#ffffff;
    text-decoration: underline  #000000;
}
`