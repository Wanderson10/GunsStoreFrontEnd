
import { useSimulationContext } from "../../context/contexct"
import { DivImg } from "./style"

function Zomm (){
    const {item ,  setImg,pegaImg} = useSimulationContext()

  
    return (
        <DivImg  translate="no" onClick={()=>setImg(false)}>
            <img translate="no" src={pegaImg} alt="foto arma"/>
        </DivImg>
        )
}

export default Zomm