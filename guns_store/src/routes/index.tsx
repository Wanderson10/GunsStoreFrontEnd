import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import TelaCadastroLogin from "../pages/cadastroLogin";
import PageProdutoClicado from "../pages/pageProdutoClicado";
import PageCarrinho from "../pages/Carrinho";
import FullItens from "../pages/fullPage/fullPageitens";
import FullItensPistols from "../pages/fullPage/fullPageitensPistol";
import FullItensRevolvers from "../pages/fullPage/fullPageitensRevolver";
import FullItensCrossbwols from "../pages/fullPage/fullPageitensCrossBowl";
import FullItensArcos from "../pages/fullPage/fullPageitensBowl";
import FullItensFacas from "../pages/fullPage/fullPageitensKnife";

function ContainerRoutes(){

  return (
   < Routes>
     <Route path ="landingpage" element={<MainPage />}/>
     <Route path ="login" element={<TelaCadastroLogin/>}/>
     <Route path ="Product" element={<PageProdutoClicado/>}/>
     <Route path="*" element={<Navigate replace to={"landingpage"} />} />
     <Route path ="Carrinho" element={<PageCarrinho/>}/>
     <Route path ="FullItens" element={<FullItens/>}/>
     <Route path ="FullItensPistols" element={<FullItensPistols/>}/>
     <Route path ="FullItensRevolvers" element={<FullItensRevolvers/>}/>
     <Route path ="FullItensCrossbowls" element={<FullItensCrossbwols/>}/>
     <Route path ="FullItensBowls" element={<FullItensArcos/>}/>
     <Route path ="FullItensKnifes" element={<FullItensFacas/>}/>
   </Routes>
  )
}

export default ContainerRoutes