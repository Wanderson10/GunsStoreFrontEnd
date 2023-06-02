import { useSimulationContext , IweaponsResponse,  } from "../../context/contexct"
import { Div } from "./style"
import { useNavigate } from "react-router-dom"


function CardsFiltrados (){
    const {allProducts,input,setItem,setInput} = useSimulationContext()


    
     const filtro = allProducts.filter((produto)=>{
         return (produto.name.toLowerCase().includes(input.toLowerCase()) || produto.tipe.toLowerCase().includes(input.toLowerCase())) 
    
     })
     const navigate = useNavigate();
     function linkToProduct (produ:IweaponsResponse){
       
         setItem(produ)

            setInput("")
            localStorage.setItem('@Product', JSON.stringify(produ))
           return  navigate(`/Product`, { replace: true });
       }

 
    const ProdutosFiltrados = filtro.map((produto)=>
    
        <Div onClick={()=>linkToProduct(produto)}>
            <h2>{produto.name}</h2>
            <img src={produto.image} alt="arma"/>
        </Div>
    )
    
    return (
        <>
        {input === "" ? (
            null
        ):(
            <li className="meusProdutos">
            {ProdutosFiltrados}
            </li>
        )
        
        
        }
        
        </>
    )
}

export default CardsFiltrados