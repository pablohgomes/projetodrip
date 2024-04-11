import "./Footer.css";
import imagemLogo from "./Assets/logo.png";
import imagemFace from "./Assets/Path_face.png";
import imagemInsta from "./Assets/Group_insta.png";
import imagemX from "./Assets/Path_x.png";
function Footer() {
  return (
    <>
      <div className="barra_final">
        <div className="parte_01">
          <img className="logo" src={imagemLogo} alt="logo" />
          <p className="paragrafo_a01">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            voluptas omnis earum eos cum rerum, repellat incidunt quidem
            voluptatibus qui!
          </p>
          <a href="https://pt-br.facebook.com/">
            <img src={imagemFace} alt="logo_face" className="img_f01" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={imagemInsta} alt="logo_insta" className="img_f01" />
          </a>
          <a href="https://twitter.com/">
            <img src={imagemX} alt="logo_x" className="img_f01" />
          </a>
        </div>
        <div className="parte_02">
          <h3 className="titulo_p2">Informação</h3>
          <a href="#" className="links">
            Sobre Drip Store
          </a>
          <a href="#" className="links">
            Segurança
          </a>
          <a href="#" className="links">
            Wishlist
          </a>
          <a href="#" className="links">
            Blog
          </a>
          <a href="#" className="links">
            Trabalhe conosco
          </a>
          <a href="#" className="links">
            Meus Pedidos
          </a>
        </div>
        <div className="parte_03">
          <h3 className="titulo_p2">Categorias</h3>
          <a href="#" className="links">
            Camisas
          </a>
          <a href="#" className="links">
            Calças
          </a>
          <a href="#" className="links">
            Bonés
          </a>
          <a href="#" className="links">
            HeadPhones
          </a>
          <a href="#" className="links">
            Tênis
          </a>
        </div>
        <div className="parte_04">
          <h3 className="titulo_p2">Contato</h3>
          <p className="paragrafo_p3">
            Av. Santos Dummont, 1510 -1 andar - Aldeota, Fortaleza-CE, 60150-161
          </p>
          <p className="paragrafo_p3">(85) 3051-3411</p>
        </div>
      </div>
      <div className="final">
        <div className="row"></div>
        <p className="p_final">₢ 2024 Digital College</p>
      </div>
    </>
  );
}

export default Footer;
