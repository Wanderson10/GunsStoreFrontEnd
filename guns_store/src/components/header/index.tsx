
import { Header } from "./style"
import logo from "./img/pngegg.png"
import { useNavigate } from "react-router-dom";
import { useSimulationContext } from "../../context/contexct";
import { IweaponsResponse } from "../../context/contexct";
import { useState } from "react";
import CardsFiltrados from "../CardsFiltro";
import { DivModal } from "./style";
import { BiCart} from "react-icons/bi"; 

function ComponentHeader( ){
    const navigate = useNavigate();
    const {setInput,input,setItem,setImg} = useSimulationContext()
    function linkTologin (){
        setImg(false)
        return  navigate(`/login`, { replace: true });
    }

    function linkToMain (){
        setItem([])
        setImg(false)
        return  navigate(`/landingpage`, { replace: true });
    }

    function linkCarrinho (){
        setImg(false)
        return  navigate(`/Carrinho`, { replace: true });
    }

   function limparInput (){
    return setInput("")
   }
  
    return (
        <>
       
        <Header>
           <figure>
            <img onClick={()=>linkToMain()} src={logo} alt="logoArmaDeFogo"/>
           </figure>
           <form>
           <input value={input} type="text" onChange={(event)=>setInput(event.target.value)}>
           </input>
           {input === "" ? (
            null 
        ) : (
            <DivModal>
                <ul>
               <div><h5>resultados de busca</h5> <button onClick={()=>limparInput()}>X</button> </div>
                
                <CardsFiltrados/>
               
                </ul>
            </DivModal>
        )}
           
            <button className="button-source">Pesquisar</button>
          
           </form>

          
 
            <div>
           <button onClick={()=>linkTologin()}>Login</button>
           <button onClick={()=>linkCarrinho()}><BiCart className="ButtonCarrinho"></BiCart></button>
           </div>
          
        </Header>
       
       
    
         </>
        
    )
}

export default ComponentHeader
