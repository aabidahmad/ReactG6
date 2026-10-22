import {ADD_TO_CART,REMOVE_FROM_CART,INCREASE_QUANTITY,
    DECREASE_QUANTITY,CLEAR_CART} from "./cartAction";
//initail State of shopEasy Cart
const initialState ={
    items:[]
};
//cartReducer function to handle cart actions
const cartReducer =(state= initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:{
            const product = action.payload;
            //check whether this product is already in the cart
            const existingItem = state.items.find((item)=>
                item.id === product.id)
            if(existingItem){
                //return a new state with an increased qunatity
                return {
                    ...state,
                    items:state.map((item)=>
                     item.id === product.id? {...item,
                        quantity:item.quantity+1}:item
                    )
                }
            }
            return {
                ...state,
                items : [
                    ...state.items,
                    {...product,quantity:1}
                ]
            }

        }
        case REMOVE_FROM_CART :{
            return {
                ...state,
                items:state.items.filter(
                    (item)=>item.id !==action.payload),
            }
        }
        case INCREASE_QUANTITY:{
            console.log("*********")
            return {
                ...state,           
                items: state.items.map((item) =>
                item.id === action.payload ? 
                {...item, quantity: item.quantity + 1 }
            : item),
            }
        }
        case DECREASE_QUANTITY:{
            return {
                ...state,
                items:state.items.map((item)=>
                item.id === action.payload?{...item,
                    quantity:Math.max(1,item.quantity-1),
                }
                    :item)
           };
    }
        case CLEAR_CART:{
            return {
                ...state,
                items:[]
            }
        }
         default:
            return state;
    } 
}
export default cartReducer;