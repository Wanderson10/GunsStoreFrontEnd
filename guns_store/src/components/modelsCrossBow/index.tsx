
import { useEffect, useState } from "react";
import { IweaponsResponse, useSimulationContext } from "../../context/contexct";
import { Li } from "./style";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function ModelsCrossBow(){
  const {item,setItem} = useSimulationContext()


  

    const{crossbows}= useSimulationContext()
    const navigate = useNavigate();

    function linkTologin (produ:IweaponsResponse){
      
      setItem(produ)
      localStorage.setItem('@Product', JSON.stringify(produ))
     
        return  navigate(`/Product`, { replace: true });
    }

    const CrossBow = crossbows?.map((arma, index) => 
        <Li key={arma.id} onClick={()=>linkTologin(arma)}>
    <img src={arma.image} alt="foto arma"/>
    <h4>{arma.name}</h4> 
    <p>R${arma.price}</p>
        </Li>
      );


      const CrossBowVitrine = CrossBow?.slice(0,4)

  

 return (
 <>
  
    {CrossBowVitrine}
  
 </>
        
    )
    
   

}

export default ModelsCrossBow