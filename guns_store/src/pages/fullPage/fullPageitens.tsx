import { useSimulationContext } from "../../context/contexct";
import { Li,Div,Titulo,Ul, } from "./style";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { IweaponsResponse } from "../../context/contexct";
import ComponentMenu from "../../components/menu"
import ComponentHeader from "../../components/header"
import ComponentTop from "../../components/UserLogado"
import { useEffect } from "react";




function FullItens(){
const {allProducts,setItem} = useSimulationContext()

const navigate = useNavigate();
    function linkToProduct (produ:IweaponsResponse){
      
        setItem(produ)
       
        localStorage.setItem('@Product', JSON.stringify(produ))
          return  navigate(`/Product`, { replace: true });
      }

const Produtos = allProducts?.map((arma, index) => 
        <Li key={arma.id} onClick={()=>linkToProduct(arma)}>
    <img src={arma.image} alt="foto arma"/>
    <h4>{arma.name}</h4> 
    <p>R${arma.price}</p>
        </Li>
)
return (
<>
<ComponentTop/>
<ComponentHeader/>
<ComponentMenu/>
<Div>
   <Titulo>Todos</Titulo>
</Div>
   <Ul>{Produtos}</Ul>
 </>
   
)
}

export default FullItens