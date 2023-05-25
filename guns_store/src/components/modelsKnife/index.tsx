
import { IweaponsResponse, useSimulationContext } from "../../context/contexct";
import { Li } from "./style";
import { useNavigate } from "react-router-dom";




function ModelsKnife(){
    const {item,setItem} = useSimulationContext()
  
  
    
  
      const{facas}= useSimulationContext()
      const navigate = useNavigate();
  
      function linkTologin (produ:IweaponsResponse){
        
        setItem(produ)
        localStorage.setItem('@Product', JSON.stringify(produ))
       
          return  navigate(`/Product`, { replace: true });
      }
  
      const Facas = facas?.map((arma, index) => 
          <Li key={arma.id} onClick={()=>linkTologin(arma)}>
      <img src={arma.image} alt="foto arma"/>
      <h4>{arma.name}</h4> 
      <p>R${arma.price}</p>
          </Li>
        );
  
  
        const FacasVitrine = Facas?.slice(0,4)
  
    
  
   return (
   <>
    
      {FacasVitrine}
    
   </>
          
      )
      
     
  
  }
  
  export default ModelsKnife