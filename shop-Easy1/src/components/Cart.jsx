 import { useSelector , useDispatch } 
 from "react-redux";
 import { increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart } from "../redux/cartAction";
function Cart(){
    // read the items from the redux store 
    const items = useSelector((state)=>state.items);
    const dispatch = useDispatch();
    //calculate total number of units in the cart
    const totalItems = items.reduce(
        (total,item)=>total + item.quantity,0);
    const totalPrice = items.reduce(
        (total,item)=>total+total.price *item.quantity,0)
        return (
            <>
              <section className="cart-section">
                <h2>Your Shopping Cart </h2>
                {
                    items.length ===0 ?(<p>
                        You Cart is Empty . Add a product to 
                        get Started !
                    </p>):(
                        <>
                        {
                            items.map((item)=>(
                                <div className="cart-item" key={item.id}>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{item.price}x {item.quantity}</p>
                                        <p>SubTotal : {(item.price*item.quantity)}</p>
                                        <div>
                                           <button onClick=
                                           {()=>dispatch(decreaseQuantity(item.id))}
                                           disabled={item.quantity ===1} > -
 
                                           </button>
                                           <button onClick=
                                           {()=>dispatch(increaseQuantity(item.id))} >+</button>

                                        </div>
                                    </div>


                                </div>
                            ))

                        }
                        
                        
                        </>
                    )
                }

              </section>
            
            </>
        )



}
export default Cart;