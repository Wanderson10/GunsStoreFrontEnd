import styled from "styled-components"


export const Div = styled.div`
margin-top:25px;
display:flex;
flex-direction:column;
background-color:white;
width:90%;
height:100%;
.divTop{
    display:flex;
    justify-content:space-between;
    padding-left:15px;
    padding-right:15px;
    padding-top:15px;
    padding-bottom:15px;
}
.esconder{
    display:none;
}
.divTitulo{
    margin-top:10px;
    width:95%;
    background-color:#C6C6C6;
    height:50px;
    display:flex;
    align-items:center;

   
    h2{ 
        padding-left:30px;
        font-weight:700;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
        
    }
}
.Comentario{
    padding-left:15px;
}

.ButtonComment{
    border:none;
    border-radius:8PX;
    height:30px;
    background-color:#00C6CF;
    cursor :pointer;
    transition:all 0.5s;
    :hover {
        scale:1.1;
    }

}

align-items:center;
.divCentral{
    display:flex
}
form{
        display:flex;
        flex-direction:row;
        align-items:center;
        width:100%;
        margin-top:15px;
        margin-bottom:15px;
      
    }
input {
    width:100%;
    height:30px;
    border-radius:5px;
    border : 0.5px solid grey;
    margin-right:10px;
}

.divPostComentario{
 
   width:80%;
}

`

export const UL = styled.ul`
display:flex;
width:100%;
justify-content:center;
width:80%;
flex-direction:column;
align-items:center;
.Data{
    font-size:12px;
    color:#7c7c7c;
}

.divSemComentarios{
    margin-top:10px;
    margin-bottom:50px;
    width:100%;
    background-color:#ffffff;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;



   
    h3{ 
        padding-left:30px;
        font-weight:700;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
        
    }
}

li{
    width:100%;
    background-color: #e9e9e9;
    border-radius:15px;
    margin-bottom:10px;
    padding-left:15px;
    padding-right:15px;
    box-sizing:border-box;
    padding-bottom:15px;


}

`