import { Body, DivTitle, Main } from "./style";
import ModalProduct from "../../components/modalProdutct";
import ComponentHeader from "../../components/header";
import ComponentMenu from "../../components/menu";
import ComponentTop from "../../components/UserLogado";
import { useSimulationContext } from "../../context/contexct";
import { useEffect } from "react";
import Comments from "../../components/abaComentarios";


function PageProdutoClicado(){
    const {item,setItem,carrinho} = useSimulationContext()

    useEffect(()=>{
       
        setItem(JSON.parse(localStorage.getItem('@Product')!))
    },[setItem])
return (
   
    <Body>
        <ComponentTop/>
        <ComponentHeader/>
        <ComponentMenu/>
        <DivTitle className="DivTitle">
            <h2>{item?.name}</h2>
        </DivTitle>
    <Main>
      
        {item?.tipe === "Bow"  || item?.tipe === "Knife" || item?.tipe === "CrossBow"?(null):(

        <div className="divExplicacao">
            <div className="divAviso">
            <h3>Comunicado importante!</h3>
            <h4>Aquiziçao de armas de fogo</h4>
            </div>
        <p>No Brasil, armas de fogo podem ser comercializada para todos os cidadãos brasileiro ou estrangeiro desde que preencham os requisitos legais, conforme descrito na Lei 10.826/2003, são estes:

*Ter idade mínima de 25 anos, exceto para os cargos definidos no artigo 28 da Lei 10.826/03;
* Possuir RG, CPF e comprovar residência (Água, Luz, Telefone, DECLARAÇÃO com firma reconhecida do titular da conta ou do proprietário do imóvel, Certidão de Casamento ou de Comunhão Estável), caso esteja em nome do cônjuge ou companheiro;
* Declarar a efetiva necessidade, expondo fatos e circunstâncias que justifiquem o pedido;
* Comprovar idoneidade, com a apresentação de certidões negativas de antecedentes criminais fornecidas pela Justiça Federal, Estadual (incluindo Juizados Especiais Criminais), Militar e Eleitoral e de não estar respondendo a inquérito policial ou a processo criminal.
* Apresentar documento comprobatório de ocupação lícita, ex.: Holerite; Contrato social; Carteira profissional / funcional; Inscrição Estadual da área rural e etc.;
* Comprovar capacidade técnica e de aptidão psicológica para o manuseio de arma de fogo, realizado em prazo não superior a 01 ano, que deverá ser atestado por instrutor de armamento e tiro e psicólogo credenciado pela Polícia Federal;
* 1 (uma) foto 3x4 recente.
* Pagar a taxa no valor de R$ 88,00, conforme estabelecido no art. 11, I e Anexo da Lei 10.826/03.</p>
        </div>
        
        )}
        

    <ModalProduct/>     
   
    
    </Main>
    <Comments></Comments>
    </Body>
   
)
}

export default PageProdutoClicado