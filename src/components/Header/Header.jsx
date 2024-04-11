import "./Header.css";
import imagemLogo from "../Header/Assets/logo.png";
import imagemSearch from "../Header/Assets/search.png";
import imagemCarrinho from "../Header/Assets/carrinho.png";
import imagemNumero from "../Header/Assets/2.png";
function Header() {
  return (
    <>
      <div className="pai">
        <img className="logo" src={imagemLogo} alt="logo" />
        <input
          className="inputss"
          type="text"
          placeholder="Pesquisar produto..."
        />
        <img className="search" src={imagemSearch} alt="search" />
        <a className="ancora" href="#">
          Cadastre-se
        </a>
        <input className="botao" type="button" value="Entrar" />
        <img className="carrinho" src={imagemCarrinho} alt="carrinho" />
        <div className="oneone">
          <img src={imagemNumero} alt="numero" className="one" />
        </div>
      </div>
      <div className="barra">
        <a className="home" href="http://localhost:5173/home#">
          Home
        </a>
        <a className="menus" href="http://localhost:5173/detalhes#">
           Detalhes do Produto
        </a>
        <a className="menus" href="#">
          Categorias
        </a>
        <a className="menus" href="#">
          Meus Pedidos
        </a>
      </div>
    </>
  );
}

export default Header;
