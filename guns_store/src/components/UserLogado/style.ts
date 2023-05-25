import styled from "styled-components";

export const Div = styled.div`
background-color:#363636;
width:100%;
height:30px;
color:white;
display:flex;
justify-content:flex-end;
padding-right:15px;
align-items:center;
box-sizing:border-box;


.DivLogin{
    width:200px;
    display:flex;
    justify-content:space-around;
    align-items:center;

    button{
        border:none;
        border-radius:10px;
        background-color:yellow;
        cursor:pointer;
        transition:all 0.5s;
        :hover{
            background-color:red;
            color: white;
            scale:1.1;
        }
    }
}
`