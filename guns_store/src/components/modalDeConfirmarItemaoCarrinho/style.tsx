import { keyframes } from "styled-components";
import styled  from "styled-components";


const animationDashboard = keyframes`
  to{
    opacity: 1;
  }
`;
 export const Body = styled.body`

 height:200%;
 width:100%;
 display:Flex;
 justify-content:center;
 align-items:center;
 background: rgba(#000, .4);
    z-index: 2;
`

export const DivConfirm = styled.div`
animation: ${animationDashboard} 1s forwards;
 opacity:0;
margin-top:200px;
position: absolute;
 background-color:#ffffff;
 display:FLEX;
flex-direction:column;
justify-content:center;
align-items:center;
width:400px;
height:250px;
border-radius:20px;
gap:15px;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
h2{
    font-weight:700;
    border-bottom:solid grey 2px;
}

button{

    width:150px;
    height:30px;
    border-radius:10px;
    transition:all 0.5s;
    :hover{
        scale:1.1;
        font-weight:600;
        cursor:pointer;
    }
}
.ButtonYes{

    :hover{
      background-color:yellow;
    
    }

}
.ButtonNo{
    :hover{
      background-color:red;
    }
}


p{
    inline-size:300px;
}
.P1{
 padding-left:80PX;
}

`