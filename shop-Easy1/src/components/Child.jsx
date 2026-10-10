import { useContext } from "react";
import { UserContext } from "../App";
function Child(){
     const user = useContext(UserContext);
    return (
        <>
         <h3>this is from child Component</h3>
         <p>Name: {user.name}</p>
         <p>Course: {user.course}</p>
        </>
    )
}
export default Child;