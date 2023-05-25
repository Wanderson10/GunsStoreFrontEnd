import React from 'react';
import ContainerRoutes from './routes';
import { GlobalStyle } from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";


function App() {
  return (
    <>
    <html translate="no">
    <GlobalStyle></GlobalStyle>
    <ContainerRoutes/>
    <ToastContainer></ToastContainer>
    </html>
    </>
  );
}

export default App;
