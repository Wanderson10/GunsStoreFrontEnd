import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .img1 {
    width: 300px;
    height: 300px;
    transition: 0.5s all;

    :hover {
      border: 2px solid yellow;
    }
    @media (max-width: 600px) {
      width: 180px;
      height: 180px;
    }
  }
  .img2 {
    width: 150px;
    height: 150px;
    border: 1px solid gray;
    border-radius: 15px;
    transition: all 0.5s;
    cursor: pointer;
    :hover {
      border: 2px solid yellow;
    }

    @media (max-width: 600px) {
      width: 100px;
      height: 100px;
    }
  }

  h5 {
    font-size: 20px;
    font-weight: 600;
  }
  .pDescription {
    padding-top: 25px;
  }

  .div1 {
    display: flex;
    align-items: center;
  }
  .divText {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15%;

    @media (max-width: 320px) {
   
 h4{
    font-size:10px;
    
 }

 }

    .divPriceAndButton {
      display: flex;
      justify-content: space-around;
      width: 100;
      p {
        font-size: 30px;
        color: red;

        @media (max-width: 320px) {
   
 
      font-size:20px;
      
   }
      }

      @media (max-width: 600px) {
     flex-direction:column;

    }
      
    }

    button {
      width: 100px;
      height: 50px;
      background-color: yellow;
      border-radius: 10px;
      cursor: pointer;
      transition:all 0.5s;

      @media (max-width: 600px) {
      width: 80px;
      font-size:10px;
      font-weight:700;

    }

    :hover{
        scale:1.1;
    }
    }
  }

  .divConhecendo {
    border-bottom: 2px solid gray;
    width: 90%;
    padding-bottom: 25px;

    @media (max-width: 600px) {
        inline-size:200px;
    }
  }

  .pDescription {
    border-bottom: 2px solid grey;
    padding-bottom: 30px;

    @media (max-width: 600px) {
        inline-size:200px;
    }
  }

  h6 {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 20px;
    font-weight: 600;

  
  }
`;
