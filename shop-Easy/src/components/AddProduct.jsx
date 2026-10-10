import Products from "./Products";
import Cart from "./Cart";
import { useState } from "react";
function AddProduct(){
    const[selectedProduct,setSelectedProduct]
    =useState(null);
    console.log(selectedProduct);

    return (
        <>
          <h1> AddProduct Component   parent Componet of Products and Cart
          </h1>
        <Products setSelectedProduct =
         {setSelectedProduct}/>
        <Cart selectedProduct  = {selectedProduct}/>   
        </>
    )

}
export default AddProduct;