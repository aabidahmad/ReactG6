function Cart({selectedProduct}){
    console.log(" CArt ",selectedProduct);
    return (
        <>
        <p>this is the Cart Component
             Child component of AddProduct</p>
            {selectedProduct ?(
                <p>Seleted : {selectedProduct}</p>
            ):(
                <p>No Product Seleted</p>
            )
            }  
        </>
    )
}
export default Cart;