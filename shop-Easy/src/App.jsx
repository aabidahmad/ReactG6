import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import Categories  from './components/Categories';
import Student from './components/Students';
import { useState } from 'react';
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
function App() {
     const[count,setCount]=useState(0);
  
  function setCount(){
    count++;
    console.log(count);
  }

  let email ="Abc@gmail.com";
  let name = "Gazi S"
  let studentName = "Adil";
  let course = "CSE AI/ML"

  return (
    <>
      <h2>Counter = {count}</h2>
    <button onClick={setCount}> increment </button>
      <MiddleCom email ={email}/>
   
      <Student name ={studentName} course= {course}  />
      <Header />
      <Hero />
      <Categories />

    </>
  )
}

export default App
