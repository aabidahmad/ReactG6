import { Link, Outlet } from "react-router-dom";

function Products({setSelectedProduct}){
    let productName ="Laptop";
    return (
        <>

         <nav>
            <Link to="/products">All Products</Link>
            <Link to="/products/electroncis">
            Electronics</Link>
            <Link to="/products/clothing">Clothing</Link>
         </nav>
         <p>this is the Product Component i.e
             Child component of AddProduct</p>
          <button onClick={()=>{
             setSelectedProduct(productName);
          }} >Add Laptop 
            </button> 
            <button onClick={()=>{
             setSelectedProduct("Mobile Phone");
          }} >Add Mobile 
            </button> 


            <Outlet />    
        </>
    )
}
export default Products;