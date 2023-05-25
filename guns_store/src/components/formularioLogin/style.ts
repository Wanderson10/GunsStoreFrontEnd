import styled from "styled-components";

export const Form = styled.form`
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding-bottom:15px;
background-color:white;
gap:20px;
height:300px;
box-sizing:border-box;
h2{
    font-weight:600;
    box-sizing:border-box;
   
   
}

p{
    margin-top:10px;
    color:red;
}

input{
    border:none;
    height:30px;
 
    width:90%;
    background-color:#D3D3D3;
    
    
   

}
div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:300px;
    height:80px;
    
    
    
}
.div1{
    
}
.div2{
   
    
}
button{
    height:30px;
    width:90%;
    border-radius:10px;
    background-color:#AB9A00;
    transition:all 0.6s;
    color:black;
    font-weight:700;
    :hover{
       
        background-color:yellow;
        cursor:pointer;
        scale:1.1;
    }
  

}
`