 import {useReducer} from "react";
function UseRedEX(){
    // const[state, dispatch]
    //  = useReducer(reducer, initalState);
    const[count,dispatch]
    =useReducer(reducer,0);
    function reducer(state,action){
        if(action.type === "INCREMENT"){
            return state + 1;
        }
        if(action.type === "DECREMENT"){
            return state - 1;
        }
    }
    return (
        <>
        <h3>this is the UseReducer Example</h3>
        <p>Count :{count}</p>
        <button onClick={()=>dispatch({type:
            "INCREMENT"})}>INCREMENT</button>
        <button onClick={()=>dispatch({type:
            "DECREMENT"})}>DECREMENT</button>
        </>
    )


}
export default UseRedEX;