import React from "react"
import "./Card.css"



function Card(props){
 
    return(
        <>
        <div className="cardio">
            <h2>{props.title}</h2>
        <div className="descrição">
            <p>{props.description}</p>
            <p>Price${props.price}</p>
           <img src={props.path}alt="" />
        </div>
            

        </div>


        </>
    )



}
export default Card