import ModelsPistol from "../../components/modelsPistol"
import ModelsRevolver from "../../components/modelsRevolver"
import ModelsCrossBow from "../../components/modelsCrossBow"
import { useNavigate } from "react-router-dom";
import { Div,Titulo,Ul, } from "./style";
import { IweaponsResponse, useSimulationContext } from "../../context/contexct";
import ModelsBow from "../../components/modelsBow";
import ModelsKnife from "../../components/modelsKnife";




function ContainerProdutcs(){

    const navigate = useNavigate()
 
      function linkFullItensPistols(){
      
     
        return  navigate(`/FullItensPistols`, { replace: true });
    }
  
    function linkFullItensRevolvers(){
      
     
        return  navigate(`/FullItensRevolvers`, { replace: true });
    }
    
    function linkFullItensCrossbowls(){
      
     
        return  navigate(`/FullItensCrossbowls`, { replace: true });
    }
    
    function linkFullItensBowls(){
      
     
        return  navigate(`/FullItensBowls`, { replace: true });
    }
    
    function linkFullItensKnife(){
      
     
        return  navigate(`/FullItensKnifes`, { replace: true });
    }

    
    return(
        <>
        <Div>
        <Titulo>Pistolas</Titulo>
        <button onClick={()=>linkFullItensPistols()}>Ver todas</button>
        </Div>
        <Ul><ModelsPistol/></Ul>

        <Div>
        <Titulo>Revolvers</Titulo>
        <button onClick={()=>linkFullItensRevolvers()}>Ver todos</button>
        </Div>
        <Ul><ModelsRevolver/></Ul>

        <Div>
        <Titulo>Bestas</Titulo>
        <button onClick={()=>linkFullItensCrossbowls()}>Ver todas</button>
        </Div>
        <Ul><ModelsCrossBow/></Ul>


        <Div>
        <Titulo>Arcos</Titulo>
        <button onClick={()=>linkFullItensBowls()}>Ver todos</button>
        </Div>
        <Ul><ModelsBow/></Ul>

        <Div>
        <Titulo>Facas</Titulo>
        <button onClick={()=>linkFullItensKnife()}>Ver todas</button>
        </Div>
        <Ul><ModelsKnife/></Ul>
        
        
        
        </>
    )
}


export default ContainerProdutcs