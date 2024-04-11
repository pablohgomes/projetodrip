import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetalhesProdutos from "./pages/DetalhesProdutos";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";



// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
  
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="detalhes" element={<DetalhesProdutos />}/>
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />


        
    </Routes>
  </BrowserRouter>
  );
}



