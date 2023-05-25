import { Div } from "./style"
import { useSimulationContext } from "../../context/contexct"

function ComponentTop( ){
  const {userName} = useSimulationContext()
    return (
        
        <Div>
          {userName?.length !== 0? (

            <p>Ola! {userName}!</p>

          ):(

           <p>Voce esta deslogado</p>

          )}
         
        </Div>
        
    )
}

export default ComponentTop