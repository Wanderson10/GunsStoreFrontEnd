import styled from "styled-components";

export const Header = styled.header`
  .alinhamento {
    display: flex;
    flex-direction: column;
  }
  .ButtonCarrinho {
    width: 30px;
    height: 30px;
  }
  img {
    width: 150px;
    height: 150px;
    transition: all 0.7s;
    @media (min-width: 620px) {
      height: 100px;
      width: 100px;
      transition: all 0.7s;
      :hover {
        scale: 1.1;
        cursor: pointer;
      }
    }
  }
  @media (min-width: 620px) {
    height: 100px;
    flex-direction: row;
  }

  width: 100%;
  height: 500px;
  background-color: #363636;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  form {
    display: flex;
    justify-content: space-between;
    border: 2px solid #ccc;
    height: 50px;
    width: 50%;
    border-radius: 100px;
    border: 2px solid #424242;
    background-color: #424242;
    transition: all 0.1s;
    :hover {
      border: 3px solid #bffcf9;
    }

    @media (min-width: 620px) {
      width: 30%;
    }
  }

  input {
    border: none;
    border-radius: 100px;
    width: 90%;
    background-color: #424242;
    :focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    @media (min-width: 620px) {
      width: 90%;
    }
  }

  div {
    width: 40%;
    display: flex;
    justify-content: space-evenly;

    @media (min-width: 620px) {
      width: 35%;
    }
  }

  button {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    transition: all 0.8s;
    background-color: #bffcf9;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      scale: 1.2;
      cursor: pointer;
    }

    @media (min-width: 620px) {
      width: 100px;
      border-radius: 100px;
    }
  }

  .button-source {
    background-color: #F9F871;
    height: 50px;
    width: 100px;
    border-radius: 100px;
    transition: all 0.8s;

    :hover {
      background-color: #bffcf9;
      scale: 1;
    }
  }
`;

export const DivModal = styled.div`
  width: 100%;

  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 76px;

  h5 {
    color: white;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ButtonCarrinho {
      width: 100px;
      height: 100px;
    }
  }
  button {
    border-radius: 100%;
    background-color: red;
    color: white;
    border: none;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #424242;
    justify-content: center;

    @media (max-width: 620px) {
    }
  }
`;
