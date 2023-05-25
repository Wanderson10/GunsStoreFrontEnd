import styled from "styled-components";



export const DivImg = styled.div`
position:absolute;
box-shadow: 0px 5px 6px rgb(0 0 0 / 100%);
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