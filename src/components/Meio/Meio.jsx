import "./Meio.css";
import imagemTenisTres from "./Assets/tennis_03.png"


function Meio() {
  return (
    <>
     <div className="divisa"></div>
      <div className="caixa_5">
        <div className="lado_a">
          <img src={imagemTenisTres} alt="tenis" className="img_la" />
        </div>
        <div className="lado_b">
          <p className="paragrafo_lb">Oferta especial</p>
          <h4 className="titulo_lb">Air Jordan edição especial colecionador</h4>
          <p className="paragrafo_lb2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            perspiciatis eveniet maiores maxime vitae assumenda, doloribus
            magni, omnis dicta veritatis vel dolor repellat magnam sequi
            nesciunt excepturi. Nesciunt, recusandae non.
          </p>
          <button className="botao_ladoB">Ver Oferta</button>
        </div>
      </div>
    
    </>
  )
}

export default Meio;
