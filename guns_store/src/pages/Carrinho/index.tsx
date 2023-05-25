import { DivTitle } from "./style"
import { Main } from "./style"
import ComponentTop from "../../components/UserLogado"
import ComponentHeader from "../../components/header"
import { useNavigate } from "react-router-dom"
import ComponentMenu from "../../components/menu"
import { IweaponsResponse, useSimulationContext } from "../../context/contexct"
import Carrinho from "../../components/carrinhoDeCompras"
import { useEffect } from "react"


function PageCarrinho (){
    const navigate = useNavigate();
    const {carrinho,setCarrinho,model} = useSimulationContext()
    useEffect(()=>{
        localStorage.setItem('@Carrinho',JSON.stringify(carrinho))
    },[setCarrinho,carrinho])
        


 
    function linkToFullProducts (){
      
       
    
      
          return  navigate(`/FullItens`, { replace: true });
      }
return (

 <>
 <ComponentTop/>
 <ComponentHeader/>
 <ComponentMenu/>
<DivTitle className="DivTitle">
    <h1>Carrinho de compras</h1>
</DivTitle>
<Main>
    {carrinho?.length === 0 ? 
    (<div>
        <h2>
            Seu carrinho esta vazio veja alguns produdos clicando <span onClick={()=>linkToFullProducts()}>aqui</span>
        </h2>
    </div>):(

        <Carrinho></Carrinho>
    )}
    
</Main>
</>
)
}


export default PageCarrinho