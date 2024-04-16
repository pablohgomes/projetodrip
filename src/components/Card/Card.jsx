import React from "react"
import "./Card.css"
import mesmoTenis from "../Card/Assets/tennis_01.png"



function Card(props){
 
    return(
        <>
        <div className="cardio">

        
        <div className="descrição">
            <div><h2>{props.title}</h2></div>
            <img src= {mesmoTenis} alt="" /> 
        </div>
        <div>
            <p>{props.description}</p>
            <p>Price${props.price}</p>
            <img src={props.path} alt="" />
        </div>
            

        </div>


        </>
    )



}
export default Card