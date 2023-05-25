import styled from "styled-components";


export const Ul = styled.ul`
width:100%;


.divTop{
    height:25px;
    width:90%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:4px  solid  #bbbbbb;
}
.DivImgName{
width:300px;
  display:flex;
  align-items:center;
  
}
.divPrice{
    
    width:80%;

    display:flex;
    justify-content:space-around;
}
li{
    width:100%;
 
}
`

export const Div = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

width:100%;

border-radius:5px;
border-bottom:2px solid  #bbbbbb;

transition: all 0.6s;


h2{
   
    font-size:12px;
    font-weight:900px;
}
img{
    width: 50px;
    height:50px;
    border-radius:20px;
    padding-left:10px;
}
:hover{
    cursor:pointer;
    background-color:#ffffff;
    text-decoration: underline  #000000;
}
`

export const DivPrice = styled.div`
background-color:white;
height:250px;

p{
    font-size:20px;
}

`