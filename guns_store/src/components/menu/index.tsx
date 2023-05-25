import { IweaponsResponse, useSimulationContext } from "../../context/contexct"
import { Menu } from "./style"

import { useNavigate } from "react-router-dom";

function ComponentMenu(){
    const {allProducts,guns,revolvers,crossbows,setItens,facas,arcos} = useSimulationContext()
    const navigate = useNavigate();
    function linkToFullProducts (){
      
        
       
      
          return  navigate(`/landingpage`, { replace: true });
      }

      function linkToFullPistols (){
      
      
       
      
          return  navigate(`/FullItensPistols`, { replace: true });
      }

      function linkToFullRevolvers (){
      
    
       
      
          return  navigate(`/FullItensRevolvers`, { replace: true });
      }
      function linkToFullBow (){
      
     
       
      
          return  navigate(`/FullItensBowls`, { replace: true });
      }
      function linkToFullCrossBow (){
      
    
      
          return  navigate(`/FullItensCrossbowls`, { replace: true });
      }

      function linkToFullKnife(){
      
     
      
          return  navigate(`/FullItensKnifes`, { replace: true });
      }
    function counter (allProducts:IweaponsResponse[]){
       let result = 0
        for (let i = 0; i < allProducts.length ; i++){
            result = result + 1
        }

        return result 

    }


    return(
        <Menu className="Footer">
            <button  onClick={()=>linkToFullProducts()}>Armas <span>({counter(allProducts)})</span></button>
            <button onClick={()=>linkToFullPistols()}>Pistolas <span>({counter(guns)})</span></button>
            <button onClick={()=>linkToFullRevolvers()}>Revolvers <span>({counter(revolvers)})</span></button>
            <button onClick={()=>linkToFullKnife()}>Facas <span>({counter(facas)})</span></button>
            <button onClick={()=>linkToFullBow()}>Arcos <span>({counter(arcos)})</span></button>
            <button onClick={()=>linkToFullCrossBow()}>Bestas <span>({counter(crossbows)})</span></button>
        </Menu>
    )
}

export default ComponentMenu
