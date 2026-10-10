import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import Categories  from './components/Categories';
import Student from './components/Students';
import { useState, useEffect,useMemo,useRef } from 'react';
//simport {useCounter} from  './hooks/useCounter';
import AddProudct from './components/AddProduct';
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';
// function HookEx(){
//   const {count,increase,decrease} = useCounter();
//   return(
//     <>
//       <h2>Count :{count}</h2>
//       <button onClick = {increase}>Increase</button>
//       <button onClick = {decrease}>Decrease</button>
//     </>
//   )
// }
function UseRefEx(){
  const[count,setCount] = useState(0);
  const previousCount = useRef();
  useEffect(()=>{
    previousCount.current = count;
  },[count])
  function changeCount(){
    setCount(count+1);
  }
  return (
    <>
    <HookEx />
    <h2>Count: {count}</h2>
    <h2>Previous Count: {previousCount.current}</h2>
    <button onClick ={changeCount}>Increase</button> 
    </>
  )
}
function UseRef(){
  const inputRef = useRef();
  function focusInput(){
     inputRef.current.focus();
  }
  return (
    <>
    <UseRefEx />
       <input ref = {inputRef}/>
      <button onClick={focusInput}>Focus</button>    
    </>
  )
}
function UseCallBack(){
     const[count,setCount] = useState(0);
     function increase(){
      setCount(count +1);
     }
     const showMessage = useCallback(()=>{
      console.log("Callback Executed");
     })
     return (
      <><h1>Count: {count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={showMessage}>Show Message</button>
      </>
     )
}
function UseEffectEx(){
     const[count,setCount] = useState(0);
     const [name,setName]=useState("Gazi");
     function changeName(){
      setName("ADIL");
     }
     function increase(){
      setCount(count +1);
     }
     useEffect(()=>{
        document.title =`Count ${count}`;
     },[name])
     return (
      <>  <h2>Count :{count} </h2>
      <button onClick={increase}>Increase</button>
      <h2>Name :{name} </h2>
      <button onClick={changeName}>Change Name</button>
      </>
     )
}

function UseMemoExample(){
  const[number ,setNumber]=useState(5);
  const[count,setCount]=useState(0);
   const square = useMemo(()=>{
    console.log("Calcuating square");
    return number*number;
   },[number])
   function increase(){
    setCount(count+1);
   }
   function setNum(){
    setNumber(number+1);
   }
   return (
    <>
    <p>Number:{number}</p>
    <p>Square : {square} </p>
    <p>Count : {count}</p>
     <button onClick={increase}>+</button>
     <button onClick={setNum}> increaseNumber </button>
      
    </>
   )


}
//  function display(name){
//   console.log(name);
//  }
//  display("Gazi")
function Child({email}){
   return (
    <>
    <h1>Email : {email}</h1>
    </>
   )
}
function MiddleCom({email}){
  return (
    <>
    <Child email ={email} /> 
    </>
  )
}

function HomePage(){
    return (
      <>
      <Hero />
      <Categories />
      </>
    )
}
function ProductPage(){
   return (
    <>
      <Products />
    </>
   )
}
function HooksPage(){
  return (
    <>
      <UseHookEx />
      <UseRefEx />
      <UseCallBack />
      <UserStateDemo />
    </>
  )
}
 function AboutPage(){
  return (
    <>
      <h1>About ShopEasy</h1>
      <p> Welcome to our online Shopping application</p>
    </>
  )
 }
 function Electronics(){
  return (
    <>
     <h1>this is the Electroincs Page</h1>
     <p>this page will show you products related to 
      Electronics
     </p>
    </>
  )
 }
function Clothing(){
  return (
    <>
     <h3>this is the clothing Page</h3>
      <p>You will here products related to clothings</p>    
    </>
  )
}
function App() {
    
     const[count,setCount] = useState(0);
     const[isOn,setIsOn]=useState(false);
      useEffect(()=>{
             document.title =`Count : ${count}`;
     },[])  
     function toggleStatus(){
       setIsOn(!isOn)
     }
  let email ="Abc@gmail.com";
  let name = "Gazi S"
  let studentName = "Adil";
  let course = "CSE AI/ML"
   function increase(){
    setCount(count+1);
   }
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />}>
          <Route path="/products/electroncis" 
          element={<Electronics />}/>
          <Route path="/products/clothing" 
          element={<Clothing />}/>
      </Route>
      <Route path="/categories" element={<Categories />}/>
    </Routes>   
    </>
  )
}
export default App;
