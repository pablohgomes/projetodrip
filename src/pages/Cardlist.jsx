import React from "react"
import Card from "../components/Card/Card"
  

  function Cardlist() {
    
    const products =  [
        {
          
            id: 1 ,
            title:"30% OFF",
            description:" this is the",
            price:21.99,
            prods:"aibcaihc"
        },
        {
         
            id: 2,
            title:"30% OFF",
            description:" this is the",
            price:24.99,
        },
        {
            id: 3,
            title:"30% OFF",
            description:" this is the",
            price:23.99
        },
        {
            id: 4,
            title:"30% OFF",
            description:" this is the",
            price:29.99
        },
        {
            id: 5,
            title:"30% OFF",
            description:" this is the",
            price:28.99
        },
        {
            id: 6,
            title:"30% OFF",
            description:" this is the",
            price:27.99
        },
        {
            id: 7,
            title:"30% OFF",
            description:" PAblo",
            price:26.99
            
        },
        {
            id: 8,
            title:"30% OFF",
            description:" this is the",
            price:25.99
            
      
        },
    ]
return (
    <>
    <div className="Cardflex">
        {products.map(product => 
           
           <Card
           
                key= {product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                path={product.path}
                
            />)}
    </div>
    
    </>
)

 }
 export default Cardlist