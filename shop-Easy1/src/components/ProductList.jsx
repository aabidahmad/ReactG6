 import { useDispatch } from "react-redux";
 import { addToCart } from "../redux/cartAction";
const products = [
  { id: 101, name: "HP Laptop", price: 55999 },
  { id: 102, name: "Smartphone", price: 25999 },
  { id: 103, name: "Headphones", price: 2499 },
  { id: 104, name: "Shoes", price: 1999 },
];

function ProductList(){
    const dispatch = useDispatch();
    const handleAddToCart = (product)=>{
        // sent ADD_TO_CART to redux with product data
        dispatch(addToCart(product))
    }
    return (
        <>
        <section className="product-grid">
            {
                products.map((product)=>(
                    <div className="product-card" key=
                    {product.id}>
                        <h3>{product.name}</h3>
                        <p>Price:{product.price}</p>
                        <button onClick={()=> 
                            handleAddToCart(product)}>
                                Add to Cart</button>
                    </div>
                ))
            }
        </section>  
        </>
    )
}
export default ProductList;