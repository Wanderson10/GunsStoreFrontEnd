
import ComponentMenu from "../../components/menu"
import ComponentHeader from "../../components/header"
import ComponentTop from "../../components/UserLogado"
import TelaCadastroLogin from "../cadastroLogin"
import ModelsProducts from "../../components/modelsPistol"
import ContainerProdutcs from "../containerProducts"
import { Main } from "./style"


function MainPage(){
    return (
        <>
       
        <ComponentTop/>
        <ComponentHeader/>
        <ComponentMenu/>
        <Main>
        <ContainerProdutcs/>
        </Main>
       </>

    )
}


export default MainPage