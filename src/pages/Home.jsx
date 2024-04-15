import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import Conteudo from "../components/Conteudo/Conteudo";
import Cardlist from "./Cardlist";
import Meio from "../components/Meio/Meio";



function Home(){

    return(
        <>

        <Header/>
        <Conteudo/>
        <Cardlist/> 
        <Meio/>

        <Footer/>
       
        </>
    )



}
export default Home