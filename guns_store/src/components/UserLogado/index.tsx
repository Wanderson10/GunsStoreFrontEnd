import { Div } from "./style"
import { useSimulationContext } from "../../context/contexct"

function ComponentTop( ){
  const {userName,logout} = useSimulationContext()
    return (
        
        <Div>
          {userName? (
            <div className="DivLogin">
            <p>Ola! {userName}!</p> <button className="Sair" onClick={()=>logout()}>deslogar</button>
            </div>

          ):(

           <p>Voce esta deslogado</p>

          )}
         
        </Div>
        
    )
}

export default ComponentTop