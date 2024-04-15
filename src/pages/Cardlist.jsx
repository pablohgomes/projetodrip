import React from "react"
import Card from "../components/Card/Card"

  function Cardlist() {
    
    const products =  [
        {
          
            id: 1 ,
            title:"product 1",
            description:" this is the",
            price:21.99,
            prods:"aibcaihc"
        },
        {
            id: 2,
            title:"product 2",
            description:" this is the",
            price:24.99,
        },
        {
            id: 3,
            title:"product 3",
            description:" this is the",
            price:23.99
        },
        {
            id: 4,
            title:"product 4",
            description:" this is the",
            price:29.99
        },
        {
            id: 5,
            title:"product 5",
            description:" this is the",
            price:28.99
        },
        {
            id: 6,
            title:"product 6",
            description:" this is the",
            price:27.99
        },
        {
            id: 7,
            title:"product 7",
            description:" PAblo",
            price:26.99
            
        },
        {
            id: 8,
            title:"product 8",
            description:" this is the",
            price:25.99
        },
    ]
return (
    <>
    {products.map(product => 
           
           <Card
           
                key= {product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                path={product.path}
                
            />)}

    </>
)

 }
 export default Cardlist