import "./Conteudo.css";
import imagemTenis from "./Assets/tennis_g.png";
import imagemOrnament from "./Assets/Ornament 11.png";
import imagemFogo from "./Assets/fogo.png";
import imagemPontos from "./Assets/pontos.png";
import imagemCamisa from "./Assets/Mask group.png";
import imagemTennis from "./Assets/tennis_02.png";
import imagemHeadPhone from "./Assets/headerphone.png";
import imagemShirt from "./Assets/shirt_des.png";
import imagemCalca from "./Assets/calcas_des.png";
import imagemBone from "./Assets/bone_des.png";
import imagemHPhone from "./Assets/headphone_des.png";
import imagemTTenis from "./Assets/tennis_des.png";
import imagemArrow from "./Assets/arrow.png";
import imagemTeNis from "./Assets/tennis_01.png";
import imagemTenisTres from "./Assets/tennis_03.png";

function Conteudo() {
  return (
    <>
  
      <div className="corpo">
        <div className="caixa_01">
          <div className="caixa_a">
            <p className="oferta">Melhores ofertas personalizadas</p>
            <h2 className="queima">Queima de estoque Nike</h2>
            <img className="fogo" src={imagemFogo} alt="imagem_de_fogo" />
            <p className="paragrafo_01">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
              nesciunt. Autem modi molestias corporis nesciunt.
            </p>
            <button className="botao_02" type="button">
              Ver ofertas
            </button>
          </div>
          <div className="caixa_b">
            <img className="tenis_a" src={imagemTenis} alt="tênis" />
            <img className="ornament" src={imagemOrnament} alt="ornament" />
          </div>
        </div>
        <div className="pontos_1">
          <img src={imagemPontos} alt="pontos" className="pontos" />
        </div>
      </div>
      <div className="caixa_02">
        <p className="colecao">Coleção em destaque</p>
        <div className="caixas">
          <div className="caixas_a">
            <p className="yelow">30% OFF</p>
            <h3 className="preco">Novo Drop Supreme</h3>
            <button className="botao_compra">Comprar</button>
            <img src={imagemCamisa} alt="camisa" className="imagem" />
          </div>
          <div className="caixas_a">
            <p className="yelow">30% OFF</p>
            <h3 className="preco">Coleção Adidas</h3>
            <button className="botao_compra">Comprar</button>
            <img src={imagemTennis} alt="tenis" className="imagem" />
          </div>

          <div className="caixas_a">
            <p className="yelow">30% OFF</p>
            <h3 className="preco">Novo Beats Bass</h3>
            <button className="botao_compra">Comprar</button>
            <img src={imagemHeadPhone} alt="headPhone" className="imagem" />
          </div>
        </div>
      </div>
      <div className="caixa_03">
        <p className="colecao_02">Coleção em destaque</p>
        <div className="img">
          <div className="imgs">
            <img src={imagemShirt} alt="camisa" className="imgs_01" />
          </div>
          <div className="imgs">
            <img src={imagemCalca} alt="calça" className="imgs_01" />
          </div>
          <div className="imgs">
            <img src={imagemBone} alt="bone" className="imgs_01" />
          </div>
          <div className="imgs">
            <img src={imagemHPhone} alt="headphones" className="imgs_01" />
          </div>
          <div className="imgs">
            <img src={imagemTTenis} alt="tenis" className="imgs_01" />
          </div>
        </div>
        <div className="topicos">
          <a href="#" id="" className="topicos_a">
            Camisetas
          </a>
          <a href="#" id="" className="topicos_a">
            Calças
          </a>
          <a href="#" id="" className="topicos_a">
            Bonés
          </a>
          <a href="#" id="" className="topicos_a">
            HeadPhones
          </a>
          <a href="#" id="" className="topicos_a">
            Tênis
          </a>
        </div>
      </div>
      <div className="caixa_4">
        <div className="textos">
          <div className="prductos">
            <p>Produtos em alta</p>
          </div>
          <div className="produtos_caixa">
            <a className="verProdutos" href="#">
              Ver todos{" "}
            </a>
            <img className="arrow" src={imagemArrow} alt="flecha" />
          </div>
        </div>
      </div>
      <div className="caixasDProdutos">
        <div className="infoProdutos">
          <p className="yelows">30% OFF</p>
          <img className="TeNis" src={imagemTeNis} alt="tenis" />
        </div>
        <div className="infoProdutos">
          <p className="yelows">30% OFF</p>
          <img className="TeNis" src={imagemTeNis} alt="tenis" />
        </div>
        <div className="infoProdutos">
          <img className="TeNis" src={imagemTeNis} alt="tenis" />
        </div>
        <div className="infoProdutos">
          <img className="TeNis" src={imagemTeNis} alt="tenis" />
        </div>
      </div>
      <div className="texts">
        <div className="texts_a">
          <p className="titulo_a">Tênis</p>
          <h6 className="titulo_b">K-Swiss V8 - Masculino</h6>
          <p className="titulo_c">
            <span>$200</span> <strong>$100</strong>
          </p>
        </div>
        <div className="texts_a">
          <p className="titulo_a">Tênis</p>
          <h6 className="titulo_b">K-Swiss V8 - Masculino</h6>
          <p className="titulo_c">
            <span>$200</span> <strong>$100</strong>
          </p>
        </div>
        <div className="texts_a">
          <p className="titulo_a">Tênis</p>
          <h6 className="titulo_b">K-Swiss V8 - Masculino</h6>
          <p className="titulo_c">
            <span>$200</span> <strong>$100</strong>
          </p>
        </div>
        <div className="texts_a">
          <p className="titulo_a">Tênis</p>
          <h6 className="titulo_b">K-Swiss V8 - Masculino</h6>
          <p className="titulo_c">
            <span>$200</span> <strong>$100</strong>
          </p>
        </div>
      </div>
      <div className="caixasDProdutos_b">
        <div className="infoProdutos">
          <img className="TeNis" src={imagemTeNis} alt="tenis" />
        </div>
        <div className="infoProdutos">
          <img className="TeNis" src={imagemTeNis} alt="tenis" />
        </div>
        <div className="infoProdutos">
          <img className="TeNis" src={imagemTeNis} alt="tenis" />
        </div>
        <div className="infoProdutos">
          <img className="TeNis" src={imagemTeNis} alt="tenis" />
        </div>
      </div>
      <div className="texts">
        <div className="texts_a">
          <p className="titulo_a">Tênis</p>
          <h6 className="titulo_b">K-Swiss V8 - Masculino</h6>
          <p className="titulo_c">
            <span>$200</span> <strong>$100</strong>
          </p>
        </div>
        <div className="texts_a">
          <p className="titulo_a">Tênis</p>
          <h6 className="titulo_b">K-Swiss V8 - Masculino</h6>
          <p className="titulo_c">
            <span>$200</span> <strong>$100</strong>
          </p>
        </div>
        <div className="texts_a">
          <p className="titulo_a">Tênis</p>
          <h6 className="titulo_b">K-Swiss V8 - Masculino</h6>
          <p className="titulo_c">
            <span>$200</span> <strong>$100</strong>
          </p>
        </div>
        <div className="texts_a">
          <p className="titulo_a">Tênis</p>
          <h6 className="titulo_b">K-Swiss V8 - Masculino</h6>
          <p className="titulo_c">
            <span>$200</span> <strong>$100</strong>
          </p>
        </div>
      </div>
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
  );
}

export default Conteudo;
