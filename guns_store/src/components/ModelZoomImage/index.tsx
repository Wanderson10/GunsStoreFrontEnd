
import { useSimulationContext } from "../../context/contexct"
import { DivImg } from "./style"

function Zomm (){
    const {item ,  setImg,pegaImg} = useSimulationContext()

  
    return (
        <DivImg  onClick={()=>setImg(false)}>
            <img  src={pegaImg} alt="foto arma"/>
        </DivImg>
        )
}

export default Zomm