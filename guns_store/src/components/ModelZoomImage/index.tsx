
import { useSimulationContext } from "../../context/contexct"
import { DivImg,Body } from "./style"

function Zomm (){
    const {item ,  setImg,pegaImg} = useSimulationContext()

  
    return (
        <Body>
        <DivImg  onClick={()=>setImg(false)}>
            <img  src={pegaImg} alt="foto arma"/>
        </DivImg>
        </Body>
        )
}

export default Zomm