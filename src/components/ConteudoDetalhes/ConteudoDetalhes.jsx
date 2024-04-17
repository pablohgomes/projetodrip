import "./ConteudoDetalhes.css"
import nikeair from "./Assets/nikeair.png"
import seta01 from "./Assets/seta1.png"
import seta02 from "./Assets/seta02.png"
import nikeairmini from "./Assets/nikeairmini.png"

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
      <div className="CoitainerFlex">
      <div className="Containerimg">
      <img className="seta02" src={seta02} alt="" />
        <img className="nikeair01" src={nikeair} alt="" />
        <img className="seta01" src={seta01} alt="" />
      </div>
     
      

      <div className="DescriçãoDetalhe">
        <h1>Tênis Nike Revolution 5 Next Nature Masculino</h1>
      </div>
      </div>
      <div className="ContainerModelos">
        <div className="boxAzul">
            <img src={nikeairmini} alt="" />
        </div>
        <div className="boxLaranja">
        <img src={nikeairmini} alt="" />
        </div>
        <div className="boxRosa">
        <img src={nikeairmini} alt="" />
        </div>
        <div className="boxMarron">
        <img src={nikeairmini} alt="" />
        </div>
        <div className="boxCinza">
        <img src={nikeairmini} alt="" />
        </div>




      </div>
      

    
      
      
    </div>
    </>
  );
}

export default ConteudoDetalhes;
