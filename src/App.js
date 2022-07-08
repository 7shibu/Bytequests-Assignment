//https://fakestoreapi.com/products/
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Nav from "./nav";
 
const Card = ({name,price,plpimaage,special_price}) => {

  return (
    
  
  <>
     
  <div className="container">
    <div className="card">     
     <img src={plpimaage} height="200px" width="200px"></img>
        <p className="card__name">{name}</p>
        <h6 className="card__price"><s>Price-{price}</s>Special Price-{special_price}</h6>
        
        </div>
</div>

  
  
  </>
  );


}
const Product = () =>{
   const[product,setProduct]=useState([]);

   useEffect(()=>{
    axios.get("https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json")
    .then((result)=>{
      console.log(result);
      setProduct(result.data.data.products);
    })
   },[])
   return(
    <>
    {product.map((pro)=><Card{...pro}/>)}
    
    </>
   );

}

const App = () => {
  return (
    <div >
      <Nav/>
      <Product/>
    </div>
  );
}

export default App;
