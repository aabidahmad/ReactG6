import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentCard from './StudentCard';
import Teacher from './Teacher';
function App() {
  return (
    <>
       <h1> Student Management </h1>
       {/*
      <p>Name: Gazi</p>
      <p>Age: 22</p>
      <p>Grade:A</p> */}
      <StudentCard name="Gazi" age="22" />
      <StudentCard name="John" age="20" />
      <StudentCard name="Afnan" age="22" />
      <h1> Rendring Teacher component from App component  </h1>
      <Teacher name="Mr. Smith" subject="C++" 
      department="CSE" />
      <Teacher name="Mrs. Johnson" subject="Physics"
       department="PHE" />
      <Teacher name="Dr. Williams" subject="Chemistry" 
      department="CHE" />
      
    </>
  )
}
export default App
