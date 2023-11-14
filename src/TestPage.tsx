import { useState, useEffect } from 'react'
//import { useNavigate } from "react-router-dom";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import Navbar from './components/Navbar'
//import { TestPage } from './TestPage.tsx';
import axios from "axios";
import { BrowserRouter as Router, Routes }
    from 'react-router-dom'

function TestPage() {
  const [name, setName] = useState('Faisal');
  //const navigate = useNavigate(); 
  const [count, setCount] = useState(0);

  const handleFirstClick = () => {
    setName('Justin');
    setCount(count + 1);
  }

  const handleSecondClick = () => {
    setName('Faisal');
    setCount(count + 1);
  }

  const handleThirdClick = () => {
    <Router>
            <Routes>Route exact path = '/' exact element={ <TestPage />}
            </Routes>
          </Router>
  }
  useEffect(() => {
    //document.title = 'You have pressed ' + count + ' times!';
      const pokemon = async () =>{
        await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then((result)=>console.log(result));
      }
      pokemon();
    
  }, []); 

  return (
    <>
      <h1>Test Page</h1>
      <div className="card">
        <p>{name}</p>
        <button onClick={handleFirstClick}>Click me
        </button>
        <button onClick={handleSecondClick}>But also click me
        </button>
        <button onClick={handleThirdClick}>But also also click me
        </button>
        
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default TestPage