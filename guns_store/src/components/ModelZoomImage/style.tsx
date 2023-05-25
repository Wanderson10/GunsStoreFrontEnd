
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


`


export const DivImg = styled.div`
position:absolute;
box-shadow: 0px 5px 6px rgb(0 0 0 / 100%);
margin-top:400px;
 box-sizing:border-box;

img{
    width:600px;
    height:600px;

    @media (max-width: 600px) {
      width: 400px;
      height: 400px;
    }

    @media (max-width: 400px) {
      width: 300px;
      height: 300px;
    }
}

`