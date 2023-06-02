import styled from "styled-components";

export const Main = styled.main`
display:flex;
justify-content:space-evenly;
flex-direction:column-reverse;
box-shadow:border-box;

@media (min-width: 620px){

    flex-direction:row;
}
`