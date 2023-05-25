import { useSimulationContext } from "../../context/contexct"
import { Body, DivConfirm } from "./style"
import { IweaponsResponse } from "../../context/contexct"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function ModalConfirm (){

    const navigate = useNavigate();

    const {setModel,setCarrinho,item ,carrinho} = useSimulationContext()

    function linkCarrinho(){
        return  navigate(`/Carrinho`, { replace: true });
    }

    
    useEffect (()=>{
        localStorage.setItem('@Carrinho',JSON.stringify(carrinho))
    },[carrinho])
   useEffect((
   
   )=>{
        
   carrinho.map ((product) =>{

        return {...product, quantidade:1}

    } )

   })
   
    function adicionarCarrinho (item1:IweaponsResponse[] , item2:IweaponsResponse){
        setModel(false)
        
        for(let i = 0; i < item1.length; i++){
            if (item2.id  === item1[i].id){
            item1[i].quantidade!++
            item1[i].price+=item2.price
            setCarrinho(item1)
            return   navigate(`/Carrinho`, { replace: true });
            }
            
                
                
            
        }
       
                  setCarrinho([...carrinho,{...item2, quantidade: 1}])
                  return  navigate(`/Carrinho`, { replace: true });
        
      
        
      
       
   
      
    
    }
   

       
    
      
   
     
    return (
        <Body>
        <DivConfirm>

            <h2>Aviso!</h2>
            {item?.tipe === "Bow" || item?.tipe === "CrossBow" || item?.tipe === "Knife"? ( 
            <p> Deseja adicionar item ao Carrinho?.</p> ):
            (<p> ESTOU COMPRANDO UMA ARMA DE FOGO E ESTOU CIENTE QUE ELA REQUER PERMISSÃO DE DOCUMENTOS FEDERAIS OU MILITARES.</p>)}
           
           {item?.tipe === "Bow" || item?.tipe === "CrossBow" || item?.tipe === "Knife"? (<div><button className="ButtonYes" onClick={()=>adicionarCarrinho(carrinho,item!)}>Adicionar</button> <button className="ButtonNo" onClick={()=>setModel(false)}>Cancelar</button></div>):(
            <div><button className="ButtonYes" onClick={()=>adicionarCarrinho(carrinho,item!)}>Ok,estou ciente.</button> <button className="ButtonNo" onClick={()=>setModel(false)}>Cancelar</button></div>
           )}
          
        </DivConfirm>
        </Body>
        
    )

}

export default ModalConfirm