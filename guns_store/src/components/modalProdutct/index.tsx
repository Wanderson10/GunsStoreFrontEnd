
import { IweaponsResponse, useSimulationContext } from "../../context/contexct"
import { Div } from "./style"
import ModalConfirm from "../modalDeConfirmarItemaoCarrinho"
import Zomm from "../ModelZoomImage"

function ModalProduct (){
 
 const {item,setModel,model,img,setImg,setPegaImg} = useSimulationContext()
 
 

 function ZommImg(img:string){
   setPegaImg(img)
    setImg(true)

}

 function adicionarCarrinho (){
   
    setModel(true)

}

 

    return (

        <Div>

            {img? (<Zomm></Zomm>):(null)},
            {model? (<ModalConfirm></ModalConfirm>):(
                null

            )}
            
            <div className="div1">
            <figure >
                <img onClick={()=>ZommImg(item!.image!)} className="img1" src={item?.image} alt="Arma"/>
            </figure>
            <div className="divText">
                <span>{item?.tipe}</span>
                <h4>{item?.name}</h4>
                <div className="divPriceAndButton"><p>R$:{item?.price}</p> <button onClick={()=>adicionarCarrinho()}>Adicionar ao carrinho</button></div>
                
            
            </div>
            

            </div>
            <div className="divImages">
                <img onClick={()=>ZommImg(item!.image)}  className="img2" src={item?.image} alt=""/>
                <img  onClick={()=>ZommImg(item!.image2)} className="img2" src={item?.image2} alt=""/>
               
            </div>

            <div className="divConhecendo">
              <h5>Conhecendo o produto:</h5>
              <p className="pDescription">{item?.descripition}</p>


              <h6>Atributos tecnicos:</h6>
              {item?.atributes.caliber !==''?  (<p> Calibre : {item?.atributes.caliber}</p>) : null} 
              {item?.atributes.capacity !==''?  (<p> Capacidade: {item?.atributes.capacity}</p>) : null} 
              {item?.atributes.length!==''?  (<p> Comprimento: {item?.atributes.length}</p>) : null} 
              {item?.atributes.model!==''?  (<p> Modelo: {item?.atributes.model}</p>) : null} 
              {item?.atributes.finishing!==''?  (<p> Acabamento: {item?.atributes.finishing}</p>) : null} 
              {item?.atributes.system!==''?  (<p> Sistema: {item?.atributes.system}</p>) : null} 
              {item?.atributes.weight!==''?  (<p> Peso: {item?.atributes.weight}</p>) : null} 
              {item?.atributes.operation!==''?  (<p> Operação: {item?.atributes.operation}</p>) : null} 
             
            </div>

        </Div>

    )
}

export default ModalProduct