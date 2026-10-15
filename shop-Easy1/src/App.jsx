import './App.css'
import {createContext} from 'react'
import MiddleCom from './components/MiddleCom'
import { useState } from 'react';
import UseRedEX from './components/UseRedEx';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
//1 . local scope 
function Counter(){
   const [count,setCount] = useState(0);
   function increase(){
    setCount(count+1);
   }
   function decrease(){
    setCount(count-1);
   }
   function reset(){
    setCount(0);
   }
   return (
    <>
     <h2>Count :{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
   )
}
//2. Shared Scope / lifting up of state
  function Button1({count ,setcount}){
    return (
      <>
        <button onClick={()=>
          setcount(count+1)}>Increase</button>
      </>
    )
  }


function Button2({count ,setcount}){
  return (
    <>
      <button onClick ={()=>setcount(count+1)}>Increase</button>
    </>
  )
}

// 1 create Context
export const UserContext = createContext();
function App() {
  const [count,setcount] = useState(0);
  const user = {
    name: "Gazi S",
    course:"CSE AI/ML"
  }
  return (
    <>
    <ProductList />
    <Cart />
     <h1>Lifting Up State Example</h1>
      <h2>Count : {count}</h2>
     
     <Button1 count={count} setcount={setcount} />
     <Button2 count={count} setcount={setcount} />
      <h3>This is ShopEasy1 Project </h3>
      <h3>Context Api Example</h3>
      {/* 2. Provide the context value or data  */}
      <UserContext.Provider value ={user}>
        <MiddleCom />
      </UserContext.Provider>
      <Counter />
      <UseRedEX />
    </>
  )
}
export default App
