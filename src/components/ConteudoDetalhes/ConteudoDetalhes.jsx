import "./ConteudoDetalhes.css"
import nikeair from "./Assets/nikeair.png"
import seta01 from "./Assets/seta1.png"
import seta02 from "./Assets/seta02.png"


function ConteudoDetalhes() {
  return (
    <>
     <div className="coteudoDetalhes">
     <div className="Categorias">
        <a className="home" href="#">
          Home / 
        </a>
        <a className="menus" href="#">
        Produtos  / 
        </a>
        <a className="menus" href="#">
          Tênis /
        </a>
        <a className="menus" href="#">
          Nike /
        </a>
        <a className="menus" href="#">
          Tênis Nike Revolution 6 Next Nature Masculino 
        </a>
      
      </div>
      <div className="nikeimg">
      <img className="seta02" src={seta02} alt="" />
        <img className="nikeair01" src={nikeair} alt="" />
        <img className="seta01" src={seta01} alt="" />
      </div>
      


     </div>
    </>
  );
}

export default ConteudoDetalhes;
