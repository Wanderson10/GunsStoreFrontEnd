
import { useEffect } from "react";
import { IweaponsResponse, useSimulationContext } from "../../context/contexct"
import { Ul,Div,DivPrice } from "./style"


function Carrinho(){
    const {carrinho,setCarrinho}= useSimulationContext()
    
 
function ValorTotal (){
    let result = 0
    for (let i = 0; i < carrinho.length; i++){
        result = result + carrinho[i].price
    }
    return result 
}
      
 
 function deletarCarrinho(produ :IweaponsResponse) {

   if ( produ.quantidade! > 1  ){ 
     for(let i = 0; i < carrinho.length ; i++)
       if(carrinho[i].id === produ.id){
        carrinho[i].quantidade! -= 1
        carrinho[i].price -= produ.price
        setCarrinho(carrinho)
         return localStorage.setItem('@Carrinho',JSON.stringify(carrinho))
       }
       

   }

   else{
    const novoCarrinho = carrinho.filter((item) => item.id !== produ.id);
    setCarrinho(novoCarrinho);
    localStorage.setItem('@Carrinho',JSON.stringify(novoCarrinho))
   }

 }


     const Produtos = carrinho?.map((produto)=>
     <li key={produto.id}>
         <Div>
             <div className="DivImgName">
                
            <img src={produto.image} alt="arma"/>
             <h2>{produto.name}</h2>

             </div>


             <div className="divPrice">
             <p>R$:{produto.price}</p>
             <p>{produto.quantidade}</p>
             <p onClick={()=>deletarCarrinho(produto)}>excluir</p>
             </div>
            
         </Div>
     </li>
     )
    return(
         <Ul>
            <div className="divTop"> <p>Produto</p><p>preco</p> <p>quantidade</p>  <p>excluir</p> </div>
            {Produtos}
            <DivPrice>
             <p>Total:R$<span>{ValorTotal()}</span></p>
             </DivPrice>
         </Ul>
    )
}

export default Carrinho