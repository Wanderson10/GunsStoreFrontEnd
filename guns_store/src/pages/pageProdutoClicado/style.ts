import styled from "styled-components";
export const Body= styled.body`
display:flex;
flex-direction:column;
align-items:center;
  
`
export const DivTitle= styled.div`
    width:100%;
    background-color:#C6C6C6;
    height:50px;
    display:flex;
    align-items:center;

   
    h2{ 
        padding-left:30px;
        font-weight:700;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
        
    }
`
export const Main = styled.main`
margin-top:25px;
width:90%;
background-color:white;
height:80%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;




.divExplicacao{
    display:flex;
    justify-content:center;
    background-color:white;
    border-bottom : 2px solid gray;
    width:90%;
    padding-top:30px;
    padding-bottom:30px;
   
    @media (max-width: 600px){
            flex-direction:column;
          
   



}
}
    


.divAviso{
    margin-right:20px;
    display:flex;
    flex-direction:column;
    white-space: nowrap;

}
h2{
    font-weight: 700;
    font-size:18;
    line-height: 1.7;
    color: inherit;
    letter-spacing: 2px;
   
}
h3{
    font-weight:700;
    color:red;
    letter-spacing: 2px;
}

h4{
    font-weight:700;
}

p{
    font-weight: 100;
    font-family: "abel";
}

`