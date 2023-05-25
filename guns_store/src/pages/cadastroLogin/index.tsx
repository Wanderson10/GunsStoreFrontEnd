import FormularioCadastro from "../../components/formulario"
import FormularioLogin from "../../components/formularioLogin"
import ComponentMenu from "../../components/menu"
import ComponentHeader from "../../components/header"
import ComponentTop from "../../components/UserLogado"
import { Main } from "./style"


function TelaCadastroLogin (){
    return (
        <>
        <ComponentTop/>
        <ComponentHeader/>
        <ComponentMenu/>
        <Main>
        <FormularioCadastro></FormularioCadastro>
        <FormularioLogin></FormularioLogin>
        </Main>
        </>
    )
}

export default TelaCadastroLogin